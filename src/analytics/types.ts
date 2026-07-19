export type DataLayerObject = Record<string, unknown> & {
  event?: string;
};

export type TrackParams = Record<
  string,
  string | number | boolean | undefined | null
>;

declare global {
  interface Window {
    dataLayer: DataLayerObject[];
  }
}

export {};
