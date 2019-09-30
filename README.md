# nuxt-lowcode-app
Low Code Platform Prototype App

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# deploy to github.io
$ yarn deploy
```

## Deployment

https://oshino-taihei.github.io/nuxt-lowcode-app/

## Sample Schema

```
{
	"blog": [
		{
			"text": "タイトル",
			"value": "name"
		},
		{
			"text": "カテゴリ",
			"value": "category"
		}
	],
	"contents": [
		{
			"text": "題名",
			"value": "title"
		},
		{
			"text": "本文",
			"value": "body"
		},
		{
			"text": "ステータス",
			"value": "status"
		}
	],
	"category": [
		{
			"text": "カテゴリー名",
			"value": "name"
		}
	],
	"comments": [
		{
			"text": "コメント",
			"value": "comment"
		},
		{
			"text": "ユーザ",
			"value": "user"
		}
	]
}
```