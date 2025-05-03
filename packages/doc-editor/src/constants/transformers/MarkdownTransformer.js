/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CHECK_LIST, LINK, TRANSFORMERS } from "@lexical/markdown";
import { URL_LINK_TRANSFORMER } from "./UrlLinkTransformers";

export const ALL_TRANSFORMERS = [
  ...TRANSFORMERS,
  URL_LINK_TRANSFORMER,
  LINK,
  CHECK_LIST,
];
