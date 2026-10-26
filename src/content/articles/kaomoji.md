---
title: "The case for kaomoji"
description: "Making an iOS app?"
pubDate: Dec 25, 2025
updatedDate: Oct 25, 2026
category: "Technology"
---

Emojis are deeply flawed. They:

- lack a lot of emotional cues ("Ok 🙂" Are you being sarcastic? Passive-aggressive? Annoyed?),
- change meanings depending on who you're texting to (Gen Z uses 😭 for everything),
- are used disproportionately (social media uses the same emojis like 😭 and 💀 year after year while most emojis go underused),
- look different on each platform,
- are Japanese-American centric (🚅 why are there so many train emojis? most mailboxes around the world don't look like 📫) and lack representation for other countries' cultural symbols and references (where are the emojis for Vietnamese _bánh mì_, Indian _sari_, or Mayan _Chichén Itzá_?),
- are a product of Silicon Valley (American tech companies corporatize emojis by making them have big eyes, big mouth, and yellow skin).

So much for a paralanguage. Despite it being used by billions of people and LLMs like ChatGPT, it's nowhere near universality. **It's time to reject [emojipocalyspe](https://www.openbible.info/blog/2015/05/heralds-of-the-emojipocalypse/) and return to emoticons and kaomoji.** However, they aren't perfect. Emoticons, like emojis, are susceptible to semantic shift, while kaomojis are disruptive and only for social signaling. **Still, they're the only way to reject emojipocalyspe, else how can we express emotional cue via text?** Not everyone uses stickers and GIFs, and they aren't supported on every platform.

Emoticons and some basic kaomojis can easily be typed via your keyboard, but most kaomojis, especially complex ones, can't or is awkward to do so. You would have to either copy-paste somewhere on the internet, save them as text shortcuts, or use your OS features/app/keyboard like Windows Clipboard Manager, [Raycast](https://www.raycast.com/yalishanda/kaomoji-search), or Japanese keyboard.

On mobile, there isn't a perfect kaomoji keyboard app, as far as I'm aware. Gboard, for what it's worth, is a product of Google, which is bound to collect your data. Other "kawaii cute" (tautology lol) kaomoji apps offer unnecessary features like fonts and custom symbols. Of course, there are also paid or freemium ones locking a lot of kaomojis behind a paywall. Throughout my research and testing, I've noticed all of them:

- don't have a feature to long press to choose variants
- don't have a button to change all eyes from x to y or remove parentheses
- don't have a feature add/remove/edit default and user-created kaomojis
- don't have search feature (fair enough because you have to create a database with names and categories)
- have a limited amount of kaomojis, most of which are kinda basic

Because of this fact, I've been wanting to create a kaomoji mobile app, or at the very least create a list of cool kaomojis.

Like any other projects, I first collected material and references. I use an [iPhone](https://github.com/tenkeyful/ios-ofb), so I downloaded all kaomoji keyboard apps in the App Store and narrowed down to [Text Faces for Texting](https://apps.apple.com/app/text-faces-for-texting/id656987566) and [Japanese Emoticons for Texting](https://apps.apple.com/app/japanese-emoticons-for-texting/id807320735), both of which are no different to each other. While scrolling through the kaomojis in the app, I found some that I personally like:

| （ｏ＿Ｏ）             | （O_O）                   | (/ \_ ; )          | (^^;)                         |
| ---------------------- | ------------------------- | ------------------ | ----------------------------- |
| `‧˚₊*̥(* ⁰̷̴͈꒨⁰̷̴͈)‧˚₊*̥`     | `(๑o̴̶̷̥᷅﹏o̴̶̷̥᷅๑)꒳ᵒ꒳ᵎᵎᵎ`      | `( p_q)`           | `ヽ(；^ ^)ノﾞ ．．．...___〇` |
| `(　´_ゝ｀)`           | `ε=ε=┏( >_<)┛　(ノ_ _)ノ` | `＼_(･ω･｀)`       | `(((( ＿ ＿)☆ ≡〇　　┏┓`      |
| `＼_(´ι _` 　)`        | `＼＿ﾍ(◕‿◕✰)`             | `(( _ _ ))..zzzZZ` | `(>ω^)`                       |
| `ヾ(*･ω･*)o`           | `┬──┬ ¯\_(ツ)`            | `(＾＾)ｂ`         | `Σ(-᷅_-᷄๑)`                   |
| `(╯°□°）╯︵ ( . 0 .)`  | `(o_O) !`                 | `＾ω＾`            | `(*･ω･)ﾉ”┌iii┐♡`              |
| `(¦ꒉ[▓▓]`             | `(¦3[___]`                | `ヾ(^_^) byebye!!` | `¯\_(ツ)_/¯`                  |
| `((;ﾟДﾟ))`             | `(／_^)／　　●　＼(^_＼)` | `(ﾟρﾟ*)`           | `(*´﹃`)`                     |
| `ヽ(^o^)ρ┳┻┳°σ(^o^)ノ` | `(⊙.☉)7`                  | `(◔ૂ◔)`            | `Ю　○三　＼(￣^￣＼)`         |
| `ಠ‿↼`                  | `( ͡~ ͜ʖ ͡°)`                | `(╯°□°)╯︵ sɯɐxǝ`  | `(⌒▽⌒)♡`                      |
| `(º﹃º )`              | `(╯°□°)╯︵ ʞɹoʍ`          | `( ͡°ω ͡°)`          | `͡° ͜ʖ ͡°`                       |
| `(╯°□°)╯︵ ƃuıʎpnʇs`   | `ヽ( ͝° ͜ʖ͡°)ﾉ`              | `_(┐「ε:)_`        | `{zzz}°°°( -_-)>c[_]`         |
| `(ʃƪ˘ﻬ˘)`              | `(*^ω^)`                  | `ʕ•̫͡•ॽु✚⃞ྉ*✲ﾟ*｡⋆`   | `ヽ(ー_ー )ノ`                |
| `ヽ(´ー｀)┌`           | `^̮^`                      | `( ͡° ͜ʖ ͡°)`         | `（☆ω☆*）`                    |
| `│_・)`                | `( ?´_ゝ｀)`              | `(;-_-)ノ`         | `(´,,•ω•,,｀)`                |
| `¯\(°_o)/¯`            | `t( -_- t )`              | `((“Ｑ(´▽｀｡)`     | `_へ__(‾◡◝ )>`                |
| `_(:3」∠)_`            | `(^q^)`                   | `（◞‸◟）`          | `ヾ(^ ^ゞ`                    |
| `(ﾉ_-｡)`               | `(＾＾；)`                | `꒰ີᵒ̴̶̷͈́༝ॢᵒ̴̶̷͈̀ ૢ꒱ ິ`    | `(｡･･｡)`                      |
| `(*_ _)人`             | `＜(。_。)＞`             | `_/＼●_`           | `orz`                         |
| `ヾ(≧∇≦)ゞ`            | `(#^^#)ゞ`                | `(・・？)`         | `(☉_☉)`                       |
| `(゜-゜)`              | `( ⚆ _ ⚆ )`               | `＿│￣│○`          | `(*^^*)`                      |
| `(〃ω〃)`              | `(ﾉ_ _)ﾉ`                 | `(　｀_ゝ´)`       | `(✧≖‿ゝ≖)`                    |
| `(^ｗ^)`               | `<(｀^´)>`                | `(눈_눈)`          | `(> ^_^ )>`                   |
| `（ｏ＿Ｏ）`           | `（O_O）`                 | `(/ _ ; )`         | `(^^;)`                       |

After using the app, I have what a kaomoji app would look like in mind:

|          [Demo 1](/notes/demo1)           |                  Demo 2                   |
| :---------------------------------------: | :---------------------------------------: |
| ![Demo 1](/images/kaomoji/demo/demo1.png) | ![Demo 2](/images/kaomoji/demo/demo2.jpg) |

(Keyboard being used in the demo is from Grammarly.)

Now I need to create a list of kaomojis for the app. Below these are the sources rendered as images that I used for the list, click on them to be redirected.

| [![](/images/kaomoji/websitepreview/AngelEmojiMaker.png)](https://emoji-maker.com/kaomoji_copy)                        | [![](/images/kaomoji/websitepreview/Cuteinternet.png)](https://cuteinternet.com/kaomoji) |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [![](/images/kaomoji/websitepreview/JapaneseEmoticons.me.png)](https://japaneseemoticons.me/all-japanese-emoticons/)   | [![](/images/kaomoji/websitepreview/KaomojiKuma.png)](https://kaomojikuma.com/)          |
| [![](/images/kaomoji/websitepreview/kaomoji.life.png)](https://kaomoji.life/categories)                                | [![](/images/kaomoji/websitepreview/kaomoji.ru.png)](https://kaomoji.ru/en/#contents)    |
| [![](/images/kaomoji/websitepreview/KawaiiFace.png)](https://kawaiiface.net/happy-faces)                               | [![](/images/kaomoji/websitepreview/lennyfac.es.png)](https://www.lennyfac.es/)          |
| [![](/images/kaomoji/websitepreview/looks.wtf.png)](https://looks.wtf/)                                                | [![](/images/kaomoji/websitepreview/PSDDude.png)](https://www.psd-dude.com/kaomojis/)    |
| [![](/images/kaomoji/websitepreview/Simeji.png)](https://simeji.me/kaomoji)                                            | [![](/images/kaomoji/websitepreview/SNSKeyboard.png)](https://snskeyboard.com/emoticon/) |
| [![](/images/kaomoji/websitepreview/Wikipedia.png)](https://wikipedia.org/wiki/List_of_emoticons#Eastern)              | [![](/images/kaomoji/websitepreview/顔文字屋さん.png)](https://kaomojiya.com/)           |
| [![](/images/kaomoji/websitepreview/Wiktionary.png)](https://de.wiktionary.org/wiki/Verzeichnis:International/Smileys) | [![](/images/kaomoji/websitepreview/KaomojiSymbols.png)](https://kaomojisymbols.com/)    |

I also read the literature. Here are some excellent snippets, if available:

- [I wish emojis had never replaced emoticons](https://www.mic.com/impact/emojis-emoticons-are-similar-but-one-is-far-far-better-20514120)
  > They're making us lazier. They're making it more difficult, at least, for me to connect with others or really form connections, depending on how we communicate. As a writer, I've always appreciated communication via language and text, prizing electronic messaging over talking over the phone. I grew up on the internet and made most of my friends online through chat rooms and endless paragraphs of roleplaying. We wrote about our emotions, thoughts, and feelings rather than showing them. It was comforting. Meaning was never misconstrued, and as someone who often only had text to remember online friends by (this was an era before it was less weird to call someone up you just met on Instagram) our conversations were my only connections to the past.
- [Emoticons can confuse LLMs, causing 'silent failures' in coding responses](https://techxplore.com/news/2026-01-emoticons-llms-silent-failures-coding.html)
- [Think twice before you use emoticons. People from other countries might not understand you : – (](https://qz.com/1116624/scientists-prove-emoticons-are-not-universally-understood)
  > For this reason, social scientists study how people respond to emoticons around the world. Much of our borderless discussion is cryptic, expressed in likes, shares, signs, and symbols. But our use of symbols as communication shortcuts assumes they’re universal—and studies show we understand emoticons differently across contexts and cultures. For example, Westerners tend to seek emotion in an emoticon’s mouth whereas Easterners seek emotion in its eyes. In other words, we don’t all see glee in this glyph : )
- [文学研究科准教授  結城雅樹](https://lynx.let.hokudai.ac.jp/CSM/interview/09.html)
  > 日本人は集団内の調和を大事にするので、本当の気持ちが顔に表れないよう気をつけます。しかし解剖学的にみると、口元の筋肉は意志でコントロールできますが、目元の筋肉はそれができません。「笑顔だけど目は笑っていない」などといいますよね。だから、相手の本当の気持ちが知りたいとき、日本人は目を見て判断するのです。一方、本心を正直に顔に表すことが奨励される社会に住むアメリカ人は、相手の口元で感情を判断します。口角を上げて笑っているかどうか、目元よりも大きく動く口に着目していると考えられます。この違いは、電子メールの「顔文字」にも表れています。日本の顔文字は主に目の部分で笑い、涙、驚きなどを表すのに対し、アメリカの顔文字は主に口で感情を表しています。
- [Are Emoticons the Future of Language? | Off Book | PBS Digital Studios (PBSoffbook)](https://www.youtube.com/watch?v=8tWZ2JmFpx0)
  > Humans have always been interested in exploring emotion through some new kind of typography. [...] Traditionally, writing wasn't really supposed to reflect our usual give and take that we have in a conversation. [...] But people always put down a new form of communication as soon as it arrives. When Plato talks about writing, he talks about it as a supplement to speech, and I think the way some people now talk about emoticons is that they're just a supplement, they're just an add onto the more important way of communicating. But these new forms of communication are much more than mere supplements. They're going to give us new ways of thinking, and that through a combination of words and images, it might be possible to say more.

| ![](/images/kaomoji/PBSoffbook/abe_lincoln.png)         | ![](/images/kaomoji/PBSoffbook/amazed.png)              | ![](/images/kaomoji/PBSoffbook/annoyed_or_rhetorical.png) | ![](/images/kaomoji/PBSoffbook/apologize.png)             |
| ------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| ![](/images/kaomoji/PBSoffbook/bad_hair_day.png)        | ![](/images/kaomoji/PBSoffbook/being_carefree.png)      | ![](/images/kaomoji/PBSoffbook/blowing_candles.png)       | ![](/images/kaomoji/PBSoffbook/blushing.png)              |
| ![](/images/kaomoji/PBSoffbook/come_on!.png)            | ![](/images/kaomoji/PBSoffbook/confused.png)            | ![](/images/kaomoji/PBSoffbook/coyness.png)               | ![](/images/kaomoji/PBSoffbook/crazy.png)                 |
| ![](/images/kaomoji/PBSoffbook/crying.png)              | ![](/images/kaomoji/PBSoffbook/dancing.png)             | ![](/images/kaomoji/PBSoffbook/deflated.png)              | ![](/images/kaomoji/PBSoffbook/depressed.png)             |
| ![](/images/kaomoji/PBSoffbook/disappointed_bitter.png) | ![](/images/kaomoji/PBSoffbook/discombobulated.png)     | ![](/images/kaomoji/PBSoffbook/don_t_know_the_answer.png) | ![](/images/kaomoji/PBSoffbook/embarassed.png)            |
| ![](/images/kaomoji/PBSoffbook/evil.png)                | ![](/images/kaomoji/PBSoffbook/excited.png)             | ![](/images/kaomoji/PBSoffbook/flash_of_intuition.png)    | ![](/images/kaomoji/PBSoffbook/get_back_foul_demon!.png)  |
| ![](/images/kaomoji/PBSoffbook/given_up.png)            | ![](/images/kaomoji/PBSoffbook/high_five.png)           | ![](/images/kaomoji/PBSoffbook/indifferent.png)           | ![](/images/kaomoji/PBSoffbook/infatuation.png)           |
| ![](/images/kaomoji/PBSoffbook/irate!.png)              | ![](/images/kaomoji/PBSoffbook/jog_someone_s_cheek.png) | ![](/images/kaomoji/PBSoffbook/kiss.png)                  | ![](/images/kaomoji/PBSoffbook/man_regrets_sideburns.png) |
| ![](/images/kaomoji/PBSoffbook/peace_of_mind.png)       | ![](/images/kaomoji/PBSoffbook/praying.png)             | ![](/images/kaomoji/PBSoffbook/shocked.png)               | ![](/images/kaomoji/PBSoffbook/shouting.png)              |
| ![](/images/kaomoji/PBSoffbook/shy.png)                 | ![](/images/kaomoji/PBSoffbook/strength.png)            | ![](/images/kaomoji/PBSoffbook/telling_a_secret.png)      | ![](/images/kaomoji/PBSoffbook/thinking.png)              |
| ![](/images/kaomoji/PBSoffbook/upset_not_amused.png)    | ![](/images/kaomoji/PBSoffbook/upset.png)               | ![](/images/kaomoji/PBSoffbook/whatevs.png)               | ![](/images/kaomoji/PBSoffbook/wtf.png)                   |

- [The History of Emoticons](https://www.youtube.com/watch?v=tf-YVA_Ta68)

| ![](/images/kaomoji/bjiru/128.png) | ![](/images/kaomoji/bjiru/129.png) | ![](/images/kaomoji/bjiru/193.png) | ![](/images/kaomoji/bjiru/195.png) |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| ![](/images/kaomoji/bjiru/287.png) | ![](/images/kaomoji/bjiru/288.png) | ![](/images/kaomoji/bjiru/289.png) | ![](/images/kaomoji/bjiru/360.png) |
| ![](/images/kaomoji/bjiru/390.png) | ![](/images/kaomoji/bjiru/393.png) | ![](/images/kaomoji/bjiru/394.png) | ![](/images/kaomoji/bjiru/395.png) |
| ![](/images/kaomoji/bjiru/397.png) | ![](/images/kaomoji/bjiru/400.png) | ![](/images/kaomoji/bjiru/409.png) | ![](/images/kaomoji/bjiru/435.png) |

Unfortunately, I don't have a Mac to start coding the app and a job to pay the annual fee of $100 for the Apple Developer Program. In the future when I do have a Mac and a job, I'll revisit this repo.
