module.exports = ({
  file,
  options,
  env,
}) => {
  console.log(file, options, env, '===========');
  return {
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {},
      cssnano: {},
    },
  };
};
