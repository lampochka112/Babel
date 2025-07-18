# 🎯 Полное руководство по Babel (2024)

## 📚 Ресурсы
  Официальная документация https://babeljs.io/docs/
  Babel REPL https://babeljs.io/

  ## 📦 Установка 
```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env

❓ Частые вопросы
Как добавить поддержку новых предложений?
Установите соответствующий плагин:

bash
npm install @babel/plugin-proposal-decorators
Как отладить процесс транспиляции?
Используйте флаг --verbose:

bash
npx babel src --out-dir dist --verbose