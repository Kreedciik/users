import { Layout } from "@/shared/hoc";
import { withHocs } from "./providers";
import { Routing } from "./routes";

const App = () => {
  return (
    <Layout>
      <Routing />
    </Layout>
  );
};

export default withHocs(App);
