import { FontWeightProperty } from "csstype";

export interface Fonts {
  Size: {
    Default: string
    Detail: string
  }
  Weight: {
    Light: FontWeightProperty
    Normal: FontWeightProperty
    SemiBold: FontWeightProperty
    Bold: FontWeightProperty
  }
}

export const Fonts: Fonts = {
  Size: {
    Default: '1.6rem',
    Detail: '1.4rem',
  },
  Weight: {
    Light: 300,
    Normal: 400,
    SemiBold: 500,
    Bold: 700
  }
};
