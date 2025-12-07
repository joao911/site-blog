import { useCallback, useMemo } from "react";
import { ShareConfig, SOCIAL_PROVIDERS, SocialProvider } from "./socialMedia";

export const useShare = ({ url, title, text }: ShareConfig) => {
  const shareConfig = useMemo(() => {
    return {
      url,
      ...(title && { title }),
      ...(text && { text }),
    };
  }, [text, title, url]);
  const share = useCallback(
    (provider: SocialProvider) => {
      try {
        const providerConfig = SOCIAL_PROVIDERS[provider];
        if (!providerConfig) {
          throw new Error(`Provider ${provider} not found`);
        }
        const shareURL = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(
          shareURL,
          "_blank",
          "width=600,height=600, location=yes, status=yes"
        );
        return !!shareWindow;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    [shareConfig]
  );

  const shareButtons = useMemo(() => {
    return Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
      provider: key,
      name: provider.name,
      icon: provider.icon,
      action: () => share(key as SocialProvider),
    }));
  }, [share]);

  return { shareButtons };
};
