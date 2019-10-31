module.exports = {
  // 设置根目录
  roots: ["<rootDir>/src"],

  // 定义分析的测试文件  加叹号为忽略这类文件
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],

  // 运行测试之前 加的垫片 解决兼容问题
  setupFiles: ["react-app-polyfill/jsdom"],

  // 做一些额外的文件配置
  setupFilesAfterEnv: [
    "./node_modules/jest-enzyme/lib/index.js",
    "<rootDir>/src/utils/testSetup.js"
  ],

  // 定义测试文件夹和文件
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],

  // 模拟js DOM环境
  testEnvironment: "jest-environment-jsdom-fourteen",

  // 语法解析操作
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest", // 转换ES6代码
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js", // 转换CSS代码
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js" // 转换其他文件
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$" // 忽略一些文件转换（node_modules）
  ],

  // 默认引入依赖的文件夹
  modulePaths: [],

  // 测试样式名  转换样式名  变换原始的css名为普通对象
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },

  // 文件缺省后缀自动寻找
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],

  // 测试插件
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};
