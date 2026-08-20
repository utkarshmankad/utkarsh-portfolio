import assert from "node:assert/strict";
import test from "node:test";
import {careerYears,padIndex,themeFromPreference,themeLabel} from "../app/portfolio.mjs";
test("saved theme wins over system preference",()=>{assert.equal(themeFromPreference("dark",false),true);assert.equal(themeFromPreference("light",true),false)});
test("system theme is used when no preference exists",()=>{assert.equal(themeFromPreference(null,true),true);assert.equal(themeFromPreference(null,false),false)});
test("theme button labels the destination theme",()=>{assert.equal(themeLabel(true),"light");assert.equal(themeLabel(false),"dark")});
test("display helpers format career data",()=>{assert.equal(padIndex(3),"03");assert.equal(padIndex(12),"12");assert.equal(careerYears(2010,2026),16)});
