import Loading from "./Loading";

function WithLoading(Component: any) {
  const NewComponent = (props: any) => {
    return props.isLoading ? <Loading /> : <Component {...props} style={{ color: "red" }} />;
  };
  return NewComponent;
}
export default WithLoading;
