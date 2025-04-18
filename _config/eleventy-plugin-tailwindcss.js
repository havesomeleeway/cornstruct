import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import postCssImport from 'postcss-import';

export default function(eleventyConfig) {
  // Add CSS files to watch target
  eleventyConfig.addWatchTarget("./public/css/");
  
  eleventyConfig.addTemplateFormats("css");
  
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function(content) {
      if (this.inputPath.includes('node_modules')) {
        return;
      }
      
      return async () => {
        let output = await postcss([
          postCssImport,
          tailwindcss,
        ]).process(content, { 
          from: this.inputPath,
          to: this.outputPath
        });
        return output.css;
      };
    }
  });
} 