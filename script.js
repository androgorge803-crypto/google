/* ============================================================
   ✏️✏️✏️  عدّل بس المنطقة دي وخلاص  ✏️✏️✏️
   ============================================================ */
const CONFIG = {

  // اكتب اسمك واسمها هنا زي ما تحب تظهر في الكلام
  yourName:    "اندرو جورج",
  partnerName: "كارين روماني",

  // الكلمة اللي لو اتكتبت في السيرش هتظهر نتايج "احنا الاتنين"
  // ممكن تضيف أكتر من كلمة في الـ array
  coupleKeywords: ["احنا", "معني الحب؟", "كارين روماني تغيان شاكر"],
  // الكلمات اللي لو اتكتبت هتظهر تعريف الحب
loveKeywords: ["الحب", "تعريف الحب", "ايه هو الحب", "معنى الحب"],

  // نص تعريف الحب - ده array، كل عنصر فقرة لوحدها، واكتب "---" لو عايز خط فاصل بين جزء وجزء
  loveDefinition:
    [
  "الحب من وجهة نظر أندرو وكارين ❤️",
  "لو حد سألنا يعني إيه حب، ممكن نقعد ساعات نحاول نشرح، وممكن نقول كلام كتير عن الاهتمام، والأمان، والاحتواء، والغيرة، والاشتياق، والخوف على الشخص اللي بنحبه… لكن في النهاية، يمكن مفيش تعريف واحد يقدر يوصف الحب فعلًا.",
  "لأن الحب مش كلمة.",
  "الحب حكاية.",
  "وحكايتنا إحنا بدأت بطريقة محدش فينا كان متوقعها.",
  "مكنتش متخيل في يوم من الأيام إني هرتبط بيكي، ولا إن البنت اللي كنت بشوفها من بعيد هتبقى في يوم من الأيام أقرب إنسانة ليا، ولا إننا هنتكلم بالشكل ده، ولا إن اسمك هيبقى مرتبط بكل التفاصيل الحلوة اللي في حياتي.",
  "لكن الغريب إني، رغم إني مكنتش أعرف عنك حاجة تقريبًا، كان جوايا إحساس غريب ناحيتك.",
  "إحساس ملوش تفسير.",
  "مكنتش أعرف ليه كنت مستني أشوفك، ولا ليه كنت بحس بغيرة من ناس بتتكلم معاكي وأنا أصلًا لسه مفيش بينا أي حاجة، ولا ليه كنت حاسس من جوايا إنك ممكن تكوني الشخص اللي في يوم من الأيام يبقى جزء من حياتي.",
  "يمكن الحب ساعات بيبدأ قبل ما العقل يفهمه.",
  "يمكن القلب بيشوف حاجات إحنا لسه مش قادرين نشوفها.",
  "وأنا فعلًا كنت حاسس بحاجة، لدرجة إني قعدت فترة طويلة متردد حتى أعملك Follow.",
  "كنت بدور على حسابك، جبت الإنستجرام من الفيس، والفيس نفسه من بوست التاسونية، وكل ده بس علشان أوصل ليكي.",
  "وحتى اليوم اللي كنا فيه في الأتوبيس، لما قعدت أبصلك وأخوفك شوية 😂، مكنتش عارف أنا بعمل إيه أصلًا.",
  "وأندرو قالي يومها: \"انزل وراها.\"",
  "وفعلًا كان ممكن أدخل الكنيسة وأكمل وراكي، لكن في الآخر وقفت نفسي وقلت:",
  "\"اللي ربنا عايزه هيكون.\"",
  "مكنتش أعرف وقتها إن الجملة دي هتبقى بداية حكاية.",
  "ومكنتش أعرف إن الشخص اللي كنت خايف أخد خطوة ناحيته، هيبقى بعد فترة الشخص اللي هخاف أخسره.",
  "رجعت عملتلك Follow، وبعدها لقيت إن في حفلة في العجمي، وشلت الـFollow تاني 😂، وبعدها لما بعتلك، دخلت أكلمك بحجة بسيطة جدًا.",
  "كنت بسأل عليكي.",
  "وبعدين الكلام جاب بعضه.",
  "والسؤال بقى كلام.",
  "والكلام بقى معرفة.",
  "والمعرفة بقت قرب.",
  "والقرب بقى حب.",
  "ومن غير ما ناخد بالنا، بقينا إحنا.",
  "---",
  "ومن وجهة نظرك إنتِ ❤️",
  "يمكن إنتِ كمان مكنتيش فاهمة اللي حصل.",
  "أول مرة شوفتي فيها الشخص اللي قدامك دلوقتي، كان في حاجة بتشدك ليه، رغم إنك مكنتيش تعرفيه.",
  "حتى إنتِ نفسك قولتي:",
  "\"إيه العبط ده؟ إنتِ متعرفيهوش أصلًا.\"",
  "ويمكن وقتها كنتِ شايفة إن الموضوع مستحيل، وإن مفيش حاجة ممكن تحصل، وإن الشخص ده أصلًا مش هيكون بيفكر فيكي بالطريقة دي.",
  "لكن مع الوقت بدأتي تاخدي بالك.",
  "بدأتي تحسي إنه عايز يكلمك.",
  "وإنتِ في البداية مكنتيش عايزة تتكلمي مع حد.",
  "لحد ما الحياة قررت تعملها بطريقتها الغريبة وتوقعك على وشك 😂.",
  "وبعدين جه يوم 1/10/2025.",
  "اليوم اللي بالنسبة ليكي كان مختلف.",
  "اليوم اللي لأول مرة حسيتي فيه بالفراشات.",
  "قعدتكم في المسرح كانت بسيطة، لكنها بالنسبة ليكي كانت بداية إحساس جديد.",
  "كنتي متلخبطة.",
  "بس مبسوطة.",
  "وحسيتي إن الشخص اللي قدامك فعلًا حد كويس.",
  "ومن اليوم ده، بدأت الحكاية تاخد شكل مختلف.",
  "---",
  "طيب يعني إيه الحب بالنسبة لنا؟",
  "الحب بالنسبة لنا مش إن كل يوم يبقى مثالي.",
  "مش إننا عمرنا ما نتخانق.",
  "ومش إن كل واحد فينا يبقى نسخة من التاني.",
  "الحب الحقيقي يمكن يكون العكس تمامًا.",
  "إنك تعرف عيوب الشخص اللي قدامك، وتشوف عصبيته، وخوفه، وغيرته، وتصرفاته اللي ساعات تضايقك، ومع ذلك تفضل شايف إن فيه حاجة تستاهل تتمسك بيها.",
  "الحب إنك متحبش الشخص بس في أحسن حالاته.",
  "تحبه وهو متوتر.",
  "وهو متضايق.",
  "وهو ساكت.",
  "وهو مش عارف يعبر.",
  "وهو بيغلط.",
  "وتساعده يبقى أحسن بدل ما تستخدم أخطاءه سبب علشان تمشي.",
  "الحب مش \"إنت كامل\".",
  "الحب هو:",
  "\"أنا عارف إنك مش كامل، وأنا كمان مش كاملة، بس أنا عايزنا نكمل بعض.\"",
  "---",
  "الحب عندي ليكي ❤️",
  "أنا مش شايفك مجرد حبيبتي.",
  "يمكن علشان كده ساعات بحس إني بتعامل معاكي كأنك بنتي الصغيرة.",
  "لما أمسكلك الشنطة.",
  "لما أوصلك.",
  "لما أجيبلك حاجة.",
  "لما أبوس إيدك.",
  "لما أهتم بتفصيلة صغيرة تخصك.",
  "ممكن الحاجة دي تبان بسيطة جدًا لأي حد تاني.",
  "لكن بالنسبالي هي حاجة مختلفة.",
  "لأن في اللحظات دي بحس إني مسؤول عن فرحتك ولو بحاجة صغيرة.",
  "بحس إنك محتاجة حد يطمن عليكي، يشيل عنك حاجة، يفرحك، ويخليكي حاسة إنك مش لوحدك.",
  "وعشان كده الـPrincess Treatment اللي بديهولك مش مجرد دلع.",
  "هو طريقتي في إني أقولك:",
  "\"إنتِ غالية عندي.\"",
  "يمكن مش بعرف أقولها كل مرة بالكلام.",
  "بس بقولها بالفعل.",
  "---",
  "والحب عندك إنتِ؟ 🎀",
  "إنتِ بتحبي فيا إني بهتم بيكي.",
  "بتحبي إني أجيبلك حاجة حلوة.",
  "بتحبي إني أتعامل معاكي بحنية.",
  "بتحبي إحساس إنك متدلعة.",
  "وإنك بالنسبالي مش مجرد شخص عادي.",
  "ويمكن أكتر حاجة بتحسيها معايا هي إنك متشالة في قلبي.",
  "ويمكن علشان كده حتى لما بنتخانق، جواكي لسه جزء بيقول:",
  "\"أنا بحبه بردو.\"",
  "وده يمكن من أجمل معاني الحب.",
  "إن الخلاف يزعلنا، لكن ميمسحش كل الحاجات الحلوة.",
  "إننا ممكن نزعل من بعض، لكن مش عايزين نخسر بعض.",
  "إننا ممكن نختلف، لكن في الآخر نرجع نقول:",
  "\"طب تعالى نصلح من بعض.\"",
  "---",
  "الحب مش إننا منختلفش",
  "إحنا هنتخانق.",
  "أكيد هنتخانق.",
  "هنزعل.",
  "ممكن نفهم بعض غلط.",
  "ممكن واحد فينا يقول حاجة والتاني يفهمها بطريقة مختلفة.",
  "ممكن الغيرة تزيد.",
  "وممكن العصبية تاخدنا.",
  "لكن الفرق الحقيقي مش في إن المشاكل موجودة أو لأ.",
  "الفرق في إحنا بنعمل إيه بعد المشكلة.",
  "هل بنستخدم الخلاف علشان نهدم كل حاجة؟",
  "ولا بنستخدمه علشان نفهم بعض أكتر؟",
  "الحب إنك بعد ما تهدى تقول:",
  "\"أنا زعلت منك، بس أنا مش عايز أخسرك.\"",
  "والحب إنك تسمع الشخص اللي قدامك حتى لو مش متفق معاه.",
  "إنك تحاول تفهم ليه زعل.",
  "وهو يحاول يفهم ليه إنت زعلت.",
  "وبدل ما كل واحد يحاول يثبت إنه الصح، الاتنين يحاولوا يوصلوا لحل.",
  "لأن الهدف في الآخر مش إن واحد يكسب.",
  "الهدف إن إحنا الاتنين نكسب بعض.",
  "---",
  "\"مهما حصل بينا\" ❤️",
  "يمكن أكتر جملة بتلخص علاقتنا هي:",
  "\"مهما حصل بينا، اعرف إني بحبك بردو.\"",
  "الجملة دي مش معناها إن أي حاجة مهما كانت مقبولة.",
  "ولا معناها إننا منصلحش أخطائنا.",
  "بالعكس.",
  "معناها إن الحب موجود، وإننا عايزين نصلح.",
  "إننا مش بنحب بعض علشان العلاقة تبقى سهلة.",
  "إحنا بنحب بعض وعايزين نتعلم نخلي العلاقة أحسن.",
  "كل خناقة المفروض تعلمنا حاجة.",
  "كل زعل يخلينا نفهم بعض أكتر.",
  "كل اختلاف يعلمنا إزاي نحب بعض بطريقة أنضج.",
  "---",
  "الحب هو الاختيار ❤️",
  "يمكن في البداية الحب كان إحساس.",
  "فراشات.",
  "فضول.",
  "نظرات.",
  "توتر.",
  "رسالة.",
  "Follow.",
  "كلام بدأ بسؤال بسيط.",
  "لكن بعد كل اللي حصل، الحب بقى اختيار.",
  "اختيار إني أختارك.",
  "واختيارك إنك تختاريني.",
  "اختيار إننا نحاول.",
  "اختيار إننا نصلح.",
  "اختيار إننا نكبر سوا.",
  "اختيار إننا مانسيبش بعض عند أول مشكلة.",
  "لأن المشاعر ممكن تزيد وتقل.",
  "لكن الاختيار هو اللي بيخلي العلاقة تكمل.",
  "---",
  "إحنا مش قصة حب مثالية",
  "ومش عايزين نبقى كده.",
  "إحنا قصة حقيقية.",
  "فيها ضحك.",
  "وفيها خناقات.",
  "فيها غيرة.",
  "فيها هزار.",
  "فيها لحظات طفولية.",
  "فيها لحظات جد.",
  "فيها أيام بنكون فيها أسعد اتنين في الدنيا.",
  "وأيام تانية بنكون مش طايقين بعض 😂.",
  "لكن وسط كل ده، فيه حاجة ثابتة:",
  "إحنا لسه بنختار بعض.",
  "لسه بنفتكر أول مرة.",
  "لسه بنفتكر أول فراشات.",
  "لسه بنفتكر أول كلام.",
  "لسه بنفتكر التفاصيل الصغيرة اللي محدش غيرنا يعرف قيمتها.",
  "ويمكن بعد سنين، لما نفتكر البداية، هنضحك ونقول:",
  "\"إحنا إزاي وصلنا لكل ده؟\"",
  "---",
  "يمكن دي كانت الخطة من البداية",
  "يمكن كل حاجة حصلت بالترتيب اللي كان لازم يحصل.",
  "الـFollow اللي اتأخر.",
  "الإنستجرام اللي اتجاب من الفيس.",
  "الأتوبيس.",
  "الكنيسة.",
  "الجملة:",
  "\"اللي ربنا عايزه هيكون.\"",
  "الحفلة.",
  "الرسالة.",
  "السؤال البسيط.",
  "الكلام اللي جاب بعضه.",
  "يوم 1/10/2025.",
  "المسرح.",
  "الفراشات.",
  "وكل التفاصيل اللي بعدها.",
  "يمكن إحنا كنا فاكرين إننا اللي بنقرر.",
  "لكن يمكن ربنا كان بيرتب حاجات إحنا مش شايفينها.",
  "ويمكن أجمل حاجة في القصة إننا لما بصينا ورا، لقينا إن كل تفصيلة صغيرة كانت جزء من الحكاية.",
  "---",
  "وفي النهاية… يعني إيه الحب؟",
  "الحب هو إنك تلاقي شخص مكنتش مخطط تلاقيه.",
  "تشوفه لأول مرة وتحس بحاجة مش قادر تفسرها.",
  "وبعدين الأيام تقربكم.",
  "فتكتشف إن الإحساس الأول ده كان مجرد بداية.",
  "الحب إن الشخص اللي كان غريب عنك يبقى الشخص اللي تعرف تفاصيله.",
  "تعرف ضحكته.",
  "زعلته.",
  "خوفه.",
  "طريقته.",
  "كلامه.",
  "وسكوته.",
  "الحب إنك تحفظ الحاجات الصغيرة اللي بتفرحه.",
  "وتفتكر الحاجات اللي بتزعله.",
  "الحب إنك تبقى عايز تشوفه مبسوط حتى لو مفيش مقابل.",
  "الحب إن فرحته تفرحك.",
  "وزعله يوجعك.",
  "الحب إنك لما تشوفه تحس براحة.",
  "وإن وجوده لوحده يغير يومك.",
  "الحب إنك وسط ملايين الناس، يبقى فيه شخص واحد بس نفسك تحكيله كل حاجة.",
  "والأهم…",
  "الحب إنك لما تحصل مشكلة، بدل ما تقول:",
  "\"خلاص، نمشي.\"",
  "تقول:",
  "\"تعالى نصلح.\"",
  "لأن في النهاية، الحب مش إنك تلاقي إنسان مفيهوش عيوب.",
  "الحب إنك تلاقي إنسان تقول عنه:",
  "\"أنا شايف عيوبك، وشايف عيوبي، ومع ذلك لسه عايزك إنتِ.\"",
  "وده يمكن يكون تعريف قصتنا للحب:",
  "الحب إن أندرو يلاقي كارين، وكارين تلاقي أندرو… وبعد ما الدنيا جمعتهم، الاتنين يفضلوا كل يوم يختاروا بعض من جديد. ❤️",
  "مش عشان قصتهم مفيهاش مشاكل، لكن عشان وسط كل المشاكل، لسه فيه حب.",
  "ومهما حصل…",
  "\"أنا بحبك بردو، ومش عايز غيرك.\" ❤️🎀🦋"
],

  // نص خاص لما يدور على اسمكم مع بعض - اكتب كلامك هنا بين علامتي التنصيص
  coupleDefinition:
    "",


  // الكلمات اللي لو اتكتبت هتظهر "مواقعنا" (الأماكن اللي بتخصكم)
  placesKeywords: ["مواقعنا", "اماكننا", "الاماكن بتاعتنا"],

  // نص "مواقعنا" - اكتب كلامك هنا بين علامتي التنصيص
  placesDefinition:
    "",

  /* لينكات المواقع بتاعتكم:
     كل عنصر عبارة عن مكان/موقع - title هو الاسم، url هو الرابط،
     description سطر بسيط تحته. سيب أي حقل فاضي لو مش عايزه */
  placesLinks: [
    { title: "موقع عيد ميلادك", url: "https://androgorge803-crypto.github.io/karen/", description: "" },
    { title: "فاكراه؟", url: "https://androgorge803-crypto.github.io/thanwya-3aima/", description: "" },
    { title: "الي لامم كل ذكرياتنا", url: "https://androgorge803-crypto.github.io/No2tet-D3fy/", description: "" },
  ],

  /* الصور:
     ضيف مسار كل صورة هنا (لو الصور جنب الملف ده حط اسم الملف بس، مثلا "her1.jpg")
     سيبها فاضية أو placeholder واستبدلها بصورك بعدين */
  images: {
    you: [
  
    ],
    partner: [
     { src: "shee (1).jpg", caption: "كتكونه من ثغرك" },
     { src: "shee (2).jpg", caption: "فون مين ده" },
     { src: "shee (3).jpg", caption: "المعلمه بهلولة" },
     { src: "shee (4).jpg", caption: "فاكره دي؟" },
     { src: "shee (5).jpg", caption: "احلي بقرهه" },
     { src: "shee (6).jpg", caption: "يغتشي بتتكثفي؟" },
     { src: "shee (7).jpg", caption: "اخاف انا" },
     { src: "shee (8).jpg", caption: "الريبوست الي فضحني" },
     { src: "shee (9).jpg", caption: "الييييي" },
     { src: "shee (10).jpg", caption: "يوغتشي" },
     { src: "shee (11).jpg", caption: "وتكه حونشايه يدين امييي" },
     { src: "shee (12).jpg", caption: "مكنتش معاكي ولا اعرفك بس كل سنه وانتي طيبه" },
     { src: "shee (13).jpg", caption: "نفس الكلام" },
     { src: "shee (14).jpg", caption: "هي بنات جرين يعممم" },
     { src: "shee (15).jpg", caption: "قمورهه" },
     { src: "shee (16).jpg", caption: "تعيشي وتزوري" },
     { src: "shee (17).jpg", caption: "قصير وضيق ومفتح واموجي غضبان" },
    ],
    couple: [
      { src: "we (1).jpg", caption: "" },
      { src: "we (2).jpg", caption: "" },
      { src: "we (3).jpg", caption: "" },
      { src: "we (4).jpg", caption: "" },
      { src: "we (5).jpg", caption: "" },
      { src: "we (6).jpg", caption: "" },
      { src: "we (7).jpg", caption: "" },
      { src: "we (8).jpg", caption: "" },
      { src: "we (9).jpg", caption: "" },
      { src: "we (10).jpg", caption: "" },
      { src: "we (11).jpg", caption: "" },
      { src: "we (12).jpg", caption: "" },
      { src: "we (13).jpg", caption: "" },
      { src: "we (14).jpg", caption: "" },
      { src: "we (15).jpg", caption: "" },
      { src: "we (16).jpg", caption: "" },
      { src: "we (17).jpg", caption: "" },
      { src: "we (18).jpg", caption: "" },
      { src: "we (19).jpg", caption: "" },
      { src: "we (20).jpg", caption: "" },
      { src: "we (21).jpg", caption: "" },
      { src: "we (22).jpg", caption: "" },
      { src: "we (23).jpg", caption: "" },
      { src: "we (24).jpg", caption: "" },
      { src: "we (25).jpg", caption: "" },
      { src: "we (26).jpg", caption: "" },
      { src: "we (27).jpg", caption: "" },
    ]
  },

  /* الفيديوهات:
     نفس فكرة الصور بالظبط - حط اسم ملف الفيديو (مثلا "video1.mp4") في src
     سيبها فاضية وهتظهر مكانها كارت "ضيف فيديو هنا" لحد ما تضيفه */
  videos: {
    you: [
      
    ],
    partner: [
      { src: "video she (1).mp4", },
      { src: "video she (2).mp4", caption: "" },
      { src: "video she (3).mp4", caption: "" },
      { src: "video she (4).mp4", caption: "" },
      { src: "video she (5).mp4", caption: "" },
      { src: "video she (6).mp4", caption: "" },
      { src: "video she (7).mp4", caption: "" },
      { src: "video she (8).mp4", caption: "" },
    ],
    couple: [
      { src: "we (1).mp4", caption: "" },
      { src: "we (2).mp4", caption: "" },
      { src: "we (3).mp4", caption: "" },
      { src: "we (4).mp4", caption: "" },
      { src: "we (5).mp4", caption: "" },
      { src: "we (6).mp4", caption: "" },
      { src: "we (7).mp4", caption: "" },
      { src: "we (8).mp4", caption: "" },
      { src: "we (9).mp4", caption: "" },
      { src: "we (10).mp4", caption: "" },
      { src: "we (11).mp4", caption: "" },
      { src: "we (12).mp4", caption: "" },
      { src: "we (13).mp4", caption: "" },
    ]
  }
};

/* ============================================================
   مفيش داعي تلمس تحت الخط ده - ده بس المحرك اللي بيشغل الصفحة
   ============================================================ */

// placeholder صورة لطيفة (كاميرا + لون فاتح) للصور اللي لسه معملهاش استبدال
function placeholderImg(seed){
  const colors = ["#FADBD8","#D6EAF8","#D5F5E3","#FCF3CF","#E8DAEF","#FDEBD0"];
  const c = colors[seed % colors.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
    <rect width='100%' height='100%' fill='${c}'/>
    <text x='50%' y='48%' font-size='40' text-anchor='middle' font-family='Arial'>📷</text>
    <text x='50%' y='68%' font-size='14' text-anchor='middle' font-family='Arial' fill='#5f6368'>ضيف صورتك هنا</text>
  </svg>`;
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
}

function normalize(str){
  return (str || "")
    .trim()
    .toLowerCase()
    .replace(/[أإآ]/g,"ا")
    .replace(/ى/g,"ي")
    .replace(/ة/g,"ه");
}

const homeEl = document.getElementById('home');
const resultsEl = document.getElementById('results');
const textResultsEl = document.getElementById('text-results');
const imageResultsEl = document.getElementById('image-results');
const videoResultsEl = document.getElementById('video-results');
const noResultsEl = document.getElementById('no-results');
const resultCountEl = document.getElementById('result-count');
const tabAll = document.getElementById('tab-all');
const tabImages = document.getElementById('tab-images');
const tabVideos = document.getElementById('tab-videos');
const searchInput = document.getElementById('search-input');
const searchInput2 = document.getElementById('search-input-2');
const suggestionsEl = document.getElementById('suggestions');
const suggestionsEl2 = document.getElementById('suggestions-2');

const SEARCH_ICON_SVG = `<svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 20.5l-5.4-5.4a7.5 7.5 0 1 0-1 1l5.4 5.4a.7.7 0 0 0 1-1zM4.5 10.5a6 6 0 1 1 12 0 6 6 0 0 1-12 0z"/></svg>`;

// بيرجع لستة الاقتراحات المتاحة (بيتبني من CONFIG تلقائي)
function getSuggestionPool(){
  const pool = [];
  if(CONFIG.yourName && CONFIG.yourName !== "اسمك") pool.push(CONFIG.yourName);
  if(CONFIG.partnerName && CONFIG.partnerName !== "اسم حبيبتك") pool.push(CONFIG.partnerName);
  if(CONFIG.coupleKeywords && CONFIG.coupleKeywords[0]) pool.push(CONFIG.coupleKeywords[0]);
  if(CONFIG.loveKeywords && CONFIG.loveKeywords[0]) pool.push(CONFIG.loveKeywords[0]);
  if(CONFIG.placesKeywords && CONFIG.placesKeywords[0]) pool.push(CONFIG.placesKeywords[0]);
  return pool;
}

function renderSuggestions(query, containerEl, inputEl){
  const q = normalize(query);
  if(!q){
    containerEl.classList.add('hidden');
    containerEl.innerHTML = "";
    return;
  }
  const matches = getSuggestionPool().filter(item => normalize(item).includes(q));
  if(matches.length === 0){
    containerEl.classList.add('hidden');
    containerEl.innerHTML = "";
    return;
  }
  containerEl.innerHTML = matches.map(m =>
    `<div class="suggestion-item" data-value="${m}">${SEARCH_ICON_SVG}<span>${m}</span></div>`
  ).join("");
  containerEl.classList.remove('hidden');

  containerEl.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('mousedown', (e) => {
      // mousedown بدل click عشان يسبق حدث الـ blur بتاع الـ input
      e.preventDefault();
      const value = item.getAttribute('data-value');
      inputEl.value = value;
      containerEl.classList.add('hidden');
      runSearch(value);
    });
  });
}

function hideSuggestions(){
  suggestionsEl.classList.add('hidden');
  suggestionsEl2.classList.add('hidden');
}

searchInput.addEventListener('input', (e) => renderSuggestions(e.target.value, suggestionsEl, searchInput));
searchInput2.addEventListener('input', (e) => renderSuggestions(e.target.value, suggestionsEl2, searchInput2));
searchInput.addEventListener('blur', () => setTimeout(hideSuggestions, 100));
searchInput2.addEventListener('blur', () => setTimeout(hideSuggestions, 100));

function matchesAny(query, list){
  const q = normalize(query);
  return list.some(k => q.includes(normalize(k)));
}

function buildImageGrid(list, fallbackName, showCaption = true){
  imageResultsEl.innerHTML = "";
  const grid = document.createElement('div');
  grid.className = 'img-grid';
  list.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'img-card';
    const img = document.createElement('img');
    img.src = item.src && item.src.length ? item.src : placeholderImg(i);
    img.onerror = () => { img.src = placeholderImg(i); };
    card.appendChild(img);
    if(showCaption){
      const cap = document.createElement('div');
      cap.className = 'cap';
      cap.textContent = (item.caption && item.caption.length) ? item.caption : fallbackName;
      card.appendChild(cap);
    }
    card.addEventListener('click', () => openLightbox(img.src));
    grid.appendChild(card);
  });
  imageResultsEl.appendChild(grid);
}

const lightboxEl = document.getElementById('lightbox');
const lightboxImgEl = document.getElementById('lightbox-img');
const lightboxCloseEl = document.getElementById('lightbox-close');

function openLightbox(src){
  lightboxImgEl.src = src;
  lightboxEl.classList.remove('hidden');
}
function closeLightbox(){
  lightboxEl.classList.add('hidden');
  lightboxImgEl.src = "";
}
lightboxEl.addEventListener('click', closeLightbox);
lightboxCloseEl.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
lightboxImgEl.addEventListener('click', (e) => e.stopPropagation());
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeLightbox(); });

function buildVideoGrid(list, fallbackName, showCaption = true){
  videoResultsEl.innerHTML = "";
  const grid = document.createElement('div');
  grid.className = 'video-grid';
  list.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'video-card';
    if(item.src && item.src.length){
      const video = document.createElement('video');
      video.src = item.src;
      video.controls = true;
      video.preload = 'metadata';
      card.appendChild(video);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'video-placeholder';
      placeholder.innerHTML = `<span class="icon">🎬</span><span>ضيف فيديو هنا</span>`;
      card.appendChild(placeholder);
    }
    if(showCaption){
      const cap = document.createElement('div');
      cap.className = 'cap';
      cap.textContent = (item.caption && item.caption.length) ? item.caption : fallbackName;
      card.appendChild(cap);
    }
    grid.appendChild(card);
  });
  videoResultsEl.appendChild(grid);
}

function showTextOnly(){
  textResultsEl.classList.remove('hidden');
  imageResultsEl.classList.add('hidden');
  videoResultsEl.classList.add('hidden');
  tabAll.classList.add('active');
  tabImages.classList.remove('active');
  tabVideos.classList.remove('active');
}
function showImagesOnly(){
  textResultsEl.classList.add('hidden');
  imageResultsEl.classList.remove('hidden');
  videoResultsEl.classList.add('hidden');
  tabAll.classList.remove('active');
  tabImages.classList.add('active');
  tabVideos.classList.remove('active');
}
function showVideosOnly(){
  textResultsEl.classList.add('hidden');
  imageResultsEl.classList.add('hidden');
  videoResultsEl.classList.remove('hidden');
  tabAll.classList.remove('active');
  tabImages.classList.remove('active');
  tabVideos.classList.add('active');
}

tabAll.addEventListener('click', showTextOnly);
tabImages.addEventListener('click', showImagesOnly);
tabVideos.addEventListener('click', showVideosOnly);

function runSearch(query){
  hideSuggestions();
  if(!query || !query.trim()){
    document.getElementById('search-input-2').focus();
    return;
  }
  homeEl.classList.add('hidden');
  resultsEl.classList.remove('hidden');
  document.getElementById('search-input-2').value = query;
  noResultsEl.classList.add('hidden');
  textResultsEl.classList.remove('hidden');
  imageResultsEl.classList.add('hidden');
  videoResultsEl.classList.add('hidden');
  showTextOnly();

  const isCouple = matchesAny(query, CONFIG.coupleKeywords);
  const isLove = matchesAny(query, CONFIG.loveKeywords);
  const isPlaces = matchesAny(query, CONFIG.placesKeywords);
  const isYou = normalize(query).includes(normalize(CONFIG.yourName)) && CONFIG.yourName !== "اسمك";
  const isPartner = normalize(query).includes(normalize(CONFIG.partnerName)) && CONFIG.partnerName !== "اسم حبيبتك";

  // في نتيجة "مواقعنا" أو "تعريف الحب" مفيش صور ولا فيديوهات، فبنخفي التابين دول
  if(isPlaces || isLove){
    tabImages.classList.add('hidden');
    tabVideos.classList.add('hidden');
  } else {
    tabImages.classList.remove('hidden');
    tabVideos.classList.remove('hidden');
  }

  let count = "هي واحده بس الي في قلبي  من بين 8 مليار";
  resultCountEl.textContent = count;

  if(isCouple){
    textResultsEl.innerHTML = `
      <div class="snippet-box">
        <div class="src">💛 نتيجة مميزة</div>
        <h3>${CONFIG.yourName} و ${CONFIG.partnerName}</h3>
        <p>${CONFIG.coupleDefinition}</p>
      </div>`;
    buildImageGrid(CONFIG.images.couple, `${CONFIG.yourName} و ${CONFIG.partnerName}`, false);
    buildVideoGrid(CONFIG.videos.couple, `${CONFIG.yourName} و ${CONFIG.partnerName}`, false);
    return;
  }

  if(isLove){
    const storyHtml = CONFIG.loveDefinition
      .map(block => block === '---' ? '<hr class="story-divider">' : `<p>${block}</p>`)
      .join('');
    textResultsEl.innerHTML = `
      <div class="snippet-box">
        <div class="src">القاموس · تعريف</div>
        <h3>الحب</h3>
        ${storyHtml}
      </div>`;
    imageResultsEl.innerHTML = "";
    videoResultsEl.innerHTML = "";
    return;
  }

  if(isPlaces){
    const linksHtml = CONFIG.placesLinks
      .filter(link => link.title || link.url)
      .map(link => `
        <div class="result-item">
          ${link.url ? `<div class="url">${link.url}</div>` : ''}
          <h3 onclick="${link.url ? `window.open('${link.url}','_blank')` : ''}">${link.title || 'رابط بدون اسم'}</h3>
          ${link.description ? `<p>${link.description}</p>` : ''}
        </div>`)
      .join("");
    textResultsEl.innerHTML = `
      <div class="snippet-box">
        <div class="src">📍 نتيجة مميزة</div>
        <h3>مواقعنا</h3>
        <p>${CONFIG.placesDefinition}</p>
      </div>
      ${linksHtml}`;
    imageResultsEl.innerHTML = "";
    videoResultsEl.innerHTML = "";
    return;
  }

  if(isYou){
    textResultsEl.innerHTML = `<div class="result-item">
        <div class="url">أنا · ${CONFIG.yourName}</div>
        <h3>${CONFIG.yourName}</h3>
        <p>الشخص اللي بيحب ${CONFIG.partnerName} أكتر ما تتخيل.</p>
      </div>`;
    buildImageGrid(CONFIG.images.you, CONFIG.yourName, false);
    buildVideoGrid(CONFIG.videos.you, CONFIG.yourName, false);
    return;
  }

  if(isPartner){
    textResultsEl.innerHTML = `<div class="result-item">
        <div class="url">أجمل حاجة في الدنيا · ${CONFIG.partnerName}</div>
        <h3>${CONFIG.partnerName}</h3>
        <p>هي عباره عن انسانة قماصه ونكاديه وبحبها</p>
      </div>`;
    buildImageGrid(CONFIG.images.partner, CONFIG.partnerName);
    buildVideoGrid(CONFIG.videos.partner, CONFIG.partnerName, false);
    return;
  }

  // مفيش نتيجة مخصصة لِلي اتكتب
  textResultsEl.classList.add('hidden');
  imageResultsEl.classList.add('hidden');
  videoResultsEl.classList.add('hidden');
  noResultsEl.classList.remove('hidden');
  noResultsEl.innerHTML = `مفيش نتايج مخصصة للي كتبته 🙂<br><span style="font-size:13px">جرّب تكتب اسمك، اسمها، "احنا"، أو "الحب"</span>`;
  resultCountEl.textContent = "";
}

function goHome(){
  resultsEl.classList.add('hidden');
  homeEl.classList.remove('hidden');
  document.getElementById('search-input').value = "";
  document.getElementById('search-input').focus();
}

document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault();
  runSearch(document.getElementById('search-input').value);
});
document.getElementById('search-form-2').addEventListener('submit', (e) => {
  e.preventDefault();
  runSearch(document.getElementById('search-input-2').value);
});
document.getElementById('logo-small-click').addEventListener('click', goHome);