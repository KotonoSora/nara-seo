export type GenerateMetaTagsParams = {
  title?: string;
  description?: string;
  language?: string;
  locale?: string;
};

export type GenerateMetaTagsResponse = Array<Record<string, string>>;
