import { ExpoConfig, ConfigContext } from "@expo/config";
import "dotenv/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: "treetracker-web-map-core-rn",
    slug: "treetracker-web-map-core-rn",
    extra: {
        eas: {
            projectId: process.env.PROJECT_ID
        }
    }
});
