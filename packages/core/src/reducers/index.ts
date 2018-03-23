/*
  The MIT License
  
  Copyright (c) 2018 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import rendererStore, { RendererStore } from './renderers.store';
import fieldStore, { FieldStore } from './fields.store';
import configStore, { ConfigStore } from './config.store';
import coreStore, { CoreStore } from './core.store';
import transformProps, {TransformPropsStore} from './transformProps.store'

export interface IJsonFormsStore {
  rendererStore: RendererStore
  fieldStore: FieldStore
  coreStore: CoreStore
  configStore: ConfigStore
  transformProps: TransformPropsStore
}

export const jsonFormsStore: IJsonFormsStore = {
  rendererStore,
  fieldStore,
  coreStore,
  configStore,
  transformProps
};


/* export const getData = coreStore.extractData
export const getSchema = coreStore.extractSchema
export const getUiSchema = coreStore.extractUiSchema */

/* export const getConfig = configStore.config */
