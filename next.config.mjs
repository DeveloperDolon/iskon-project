/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['selfrealization.in'],
    },
    webpack: (config, { isServer }) => {
        // Add the file-loader for mp3 files
        config.module.rules.push({
          test: /\.mp3$/,
          use: {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        });
    
        // Important: return the modified config
        return config;
      },
};

export default nextConfig;
