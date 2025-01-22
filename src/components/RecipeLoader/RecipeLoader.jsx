import ContentLoader from "react-content-loader";

const RecipeLoader = (props) => (
  <ContentLoader speed={2} width={288} height={359} viewBox="0 0 288 359" backgroundColor="#f3f3f3" foregroundColor="#ecebeb" {...props}>
    <rect x="-5" y="6" rx="3" ry="3" width="259" height="203" />
    <rect x="-6" y="225" rx="0" ry="0" width="163" height="16" />
    <rect x="-14" y="257" rx="0" ry="0" width="175" height="21" />
  </ContentLoader>
);

export default RecipeLoader;
