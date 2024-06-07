
# console.only()

`console.only()` ignores all other console logs and logs this one only. Inspired by [this Tweet](https://x.com/shadcn/status/1798962798028087641 "@shadcn on X/Twitter: &quot;Who's patching console? console.only: ignore all console logs and log this one only.&quot;"). This package works both in the browser and in standalone JavaScript runtimes (e.g. Node.js, Deno, Bun, etc.).

npm: [consoledotonly](https://npmjs.com/package/consoledotonly) <br>
GitHub: [BenjaminAster/console.only](https://github.com/BenjaminAster/console.only)

```javascript
import "consoledotonly";

console.log("test");
console.log("test2");
console.only("only this!")
console.log("test3");
console.only("and this!");
console.log("test4");

// prints "only this!" and "and this!" to the console
```

## Q&A
**Q**: Is this satire? <br>
**A**: Yes.

**Q**: Does this actually work? <br>
**A**: Also yes.

## Motivation

> [@shadcn](https://x.com/shadcn/status/1798962798028087641)
![Perfect Twitter Screenshot](https://github.com/BenjaminAster/console.only/assets/19857414/e83c19c0-7e94-4171-8a1f-cec6e5c54ba4)
