// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    borderRadius: 5,
    colorPrimary: '#04C8B1',
  },
  components: {
    Button: {
      // paddingInline: 20,
      controlHeightLG: 53,
      // controlHeight: 30,
      // defaultBorderColor: "#488C02",
      // defaultColor: "#488C02",
    },
    Input: {
      controlHeightLG: 50,
      inputFontSizeLG: 20
    }
  },
};

export default theme;
