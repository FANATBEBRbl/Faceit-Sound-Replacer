# Faceit Sound Replacer

![Логотип](https://i.imgur.com/AxCX0xG.png)

### Автор / Author
- Telegram: [@fanatbebrbl](https://t.me/fanatbebrbl)
- Faceit: [FANATBEBRbl](https://www.faceit.com/en/players/FANATBEBRbl)

# ИНСТРУКЦИЯ НА РУССКОМ ЯЗЫКЕ 
Расширение для браузера, позволяющее заменить стандартные звуки принятия игры Faceit на свои.

### Установка
1. Скачайте или склонируйте репозиторий.
2. Распакуйте его
3. Откройте браузер → откройте chrome://extensions в строке поиска → Включите "Режим разработчика".
4. Нажмите "Загрузить распакованное расширение" и выберите папку с этим проектом.

> [!WARNING]
> Google Chrome прекратил поддержку Manifest v2 и в следствии этого 
> без предварительной настройки браузера запустить расширение невозможно.
> - Решение проблемы [*тык*](https://telegra.ph/Vklyuchenie-Manifest-v2-v-Google-Chrome-07-17)

> Переход расширения на Manifest v3 невозможен.

## Как пользоваться

### 1. Замена звуков
- Откройте папку: `sounds/`.
- Замените нужный файл (например, `custom1.mp3`, `custom2.mp3` и т.д.) на свой mp3-файл с таким же именем.
- Обновите страницу Faceit.

| Название Faceit         | Ваш файл         | label (надпись)         |
|------------------------|------------------|------------------------|
| Found tone             | custom1.mp3       | custom_sound1/ваша     |
| Found tone enhanced    | custom2.mp3      | custom_sound2/ваша     |
| Large crowd            | custom3.mp3      | custom_sound3/ваша     |
| Lone wolf howling      | custom4.mp3      | custom_sound4/ваша     |
| Radio impact swirl     | custom5.mp3      | custom_sound5/ваша     |
| Thunder clap           | custom6.mp3      | custom_sound6/ваша     |
| Whoosh whip            | custom7.mp3      | custom_sound7/ваша     |

### 2. Замена надписей
- Откройте файл `sounds/config.json` в папке расширения.
- В поле `label` для каждого звука укажите свою надпись.
- Сохраните файл и обновите страницу Faceit.

## Ограничения
- Все изменения делаются только в корне расширения в папке `sounds/`. Других, более удобных вариантов, **НЕТ**.

> Расширение тестировалось в Google Chrome и Yandex Browser на русской и английской версии веб-клиента Faceit.

# INSTRUCTION IN ENGLISH
Browser extension that allows you to replace the standard Faceit game acceptance sounds with your own.

### Installation
1. Download or clone the repository.
2. Unzip it
3. Open your browser → open chrome://extensions in the search bar → Enable "Developer Mode".
4. Click "Download unzipped extension" and select the folder with this project.

> [!WARNING]
> Google Chrome has stopped supporting Manifest v2 and as a result 
> it is not possible to run the extension without preconfiguring the browser.
> - Solution [*click*](https://telegra.ph/Vklyuchenie-Manifest-v2-v-Google-Chrome-07-17)

> It is not possible to migrate the extension to Manifest v3.

## How to use

### 1. Replacing sounds
- Open the folder: ``sounds/`.
- Replace the desired file (e.g. `custom1.mp3`, `custom2.mp3`, etc.) with your mp3 file with the same name.
- Update the Faceit page.

| Faceit name            | Your file        | Label                  |
|------------------------|------------------|------------------------|
| Found tone             | custom1.mp3       | custom_sound1/yours    |
| Found tone enhanced    | custom2.mp3      | custom_sound2/yours     |
| Large crowd            | custom3.mp3      | custom_sound3/yours    |
| Lone wolf howling      | custom4.mp3      | custom_sound4/yours    |
| Radio impact swirl     | custom5.mp3      | custom_sound5/yours    |
| Thunder clap           | custom6.mp3      | custom_sound6/yours    |
| Whoosh whip            | custom7.mp3      | custom_sound7/yours    |

### 2. Replacing inscriptions
- Open the file `sounds/config.json` in the extension folder.
- Specify a different label for each sound in the `label` field.
- Save the file and refresh the Faceit page.

## Restrictions
- All changes are made only in the root of the extension in the `sounds/` folder. There are **NO other, more convenient options**.

> The extension was tested in Google Chrome and Yandex Browser on the Russian and English versions of the Faceit web client.
