// Types for compiled templates
declare module 'ec-typescript-repro-1439/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
