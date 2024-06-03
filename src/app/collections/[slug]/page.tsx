import React from "react";

const CollectionPage = ({params}: {params: {slug: string}}) => {
	return <div>{params.slug}</div>;
};

export default CollectionPage;
