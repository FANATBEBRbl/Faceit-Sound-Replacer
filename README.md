# Faceit Sound Replacer

## Описание
Расширение для браузера, позволяющее заменить стандартные звуки принятия игры Faceit на свои.

## Установка
1. Скачайте или склонируйте репозиторий.
2. Откройте браузер → browser://extensions/ → Включите "Режим разработчика".
3. Нажмите "Загрузить распакованное расширение" и выберите папку с этим проектом.

## Как пользоваться

### 1. Замена звуков
- Откройте папку: `sounds/`.
- Замените нужный файл (например, `custom1.mp3`, `custom2.mp3` и т.д.) на свой mp3-файл с таким же именем.
- Перезапустите расширение и обновите страницу Faceit.

| Название Faceit         | Ваш файл         | label (надпись)         |
|------------------------|------------------|------------------------|
| Found tone             | custom.mp3       | custom_sound1/ваша     |
| Found tone enhanced    | custom1.mp3      | custom_sound2/ваша     |
| Large crowd            | custom2.mp3      | custom_sound3/ваша     |
| Lone wolf howling      | custom3.mp3      | custom_sound4/ваша     |
| Radio impact swirl     | custom4.mp3      | custom_sound5/ваша     |
| Thunder clap           | custom5.mp3      | custom_sound6/ваша     |
| Whoosh whip            | custom6.mp3      | custom_sound7/ваша     |

### 2. Замена надписей
- Откройте файл `sounds/config.json` в папке расширения.
- В поле `label` для каждого звука укажите свою надпись.
- Сохраните файл, перезапустите расширение и обновите страницу Faceit.

## Ограничения
- Все изменения делаются только в корне расширения в папке `sounds/`. Других вариантов НЕТ.
- После ЛЮБОГО изменения необходимо перезагрузить расширение в browser://extensions/ и обновить страницу на Faceit.

### Автор
- made by FANATBEBRbl
- Telegram: [@fanatbebrbl](https://t.me/fanatbebrbl)
- Faceit: [FANATBEBRbl](https://www.faceit.com/en/players/FANATBEBRbl)
