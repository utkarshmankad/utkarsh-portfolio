export function themeFromPreference(saved,systemDark=false){return saved?saved==="dark":systemDark}
export function themeLabel(isDark){return isDark?"light":"dark"}
export function padIndex(index){return String(index).padStart(2,"0")}
export function careerYears(start,end){return end-start}
