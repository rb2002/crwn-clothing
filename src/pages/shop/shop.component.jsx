import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  fetchCollectionsStart,
  fetchCollectionsFailure
} from "../../redux/shop/shop.actions";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      ></Route>
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      ></Route>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
