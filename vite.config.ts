// SPDX-FileCopyrightText: 2019 John Irle
// SPDX-License-Identifier: MIT
//
// This file is part of Leadership-quote-generator

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
});
