import { PrivacyPage } from "@/modules/static/PrivacyPage";
import { withApollo } from "@/utils/withApollo";

export default withApollo({ ssr: true })(PrivacyPage);
