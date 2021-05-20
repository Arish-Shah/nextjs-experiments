import { LoginPage } from "@/modules/auth/LoginPage";
import { withApollo } from "@/utils/withApollo";

export default withApollo({ ssr: false })(LoginPage);
