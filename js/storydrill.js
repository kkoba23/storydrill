window.onload = function() {
	var lists = [];
	lists[0] = [ '0〜12歳', '13〜22歳', '23〜35歳', '36〜46歳', '50〜60歳', '61歳以上'

	];
	lists[1] = [
			'保育園児・幼稚園児',
			'小学生',
			'中学生',
			'高校生',
			'大学生・専門学校生',
			'専門的学校の学生（フラワーアレンジメントやバレエスクール、書道などの「習い事」なども含む）',
			'専業主婦',
			'警察官（刑事、鑑識員、警視総監なども含む）',
			'消防士・救急隊員（レスキュー隊含む）',
			'軍人（自衛官、傭兵、架空の軍隊含む）',
			'教師（幼稚園教諭や家庭教師、大学教授、インストラクターなども含む）',
			'医師（レジデント、開業医、大学病院院長までも含む）',
			'看護師・ホームヘルパーなど（見習いからベテランまで含む）',
			'政治家（区会議員から内閣総理大臣まで含む）',
			'秘書（新人からベテランまで含む）',
			'マスコミ関係者・組織人（新聞社記者、テレビ局報道局長なども含む）',
			'フリーランサー〈会社や特定の会社との専属契約を結んでいない自営業〉（フリージャーナリスト、フリーアナウンサー、フリーライター、小説家、脚本家、画家など）',
			'テレビ局・映画会社関係者（受付嬢から宣伝マン、社長まで含む）',
			'モデル・役者・タレントなど（売れっ子、元売れっ子、修業中まで含む）',
			'マネージャー（タレントマネージャーから運動部マネージャーまで含む）',
			'プロデューサー（音楽、イベント、映画、WEBなど含む）',
			'ディレクター or 監督（映画、音楽、アート、スポーツなども含む）',
			'スポーツ選手（部活動レベルからオリンピック選手までも含む）',
			'スポーツトレーナー（部活動レベルからオリンピック選手までも含む）',
			'サラリーマン・OLなど',
			'研究者・発明家など',
			'アルバイト・フリーター・家事手伝い',
			'本屋・ビデオ屋・音楽ショップなどの店員、店主',
			'物販業〈ショッピングセンター、百貨店、スーパー、コンビニ、ホームセンター、ガソリンスタンド、古物商、通信販売、訪問販売など〉（店員、店長、経営者など）',
			'飲食サービス業〈レストラン、ファミレス、ファストフード、喫茶店、居酒屋、スナック、バーなど〉（ウェイター、ウェイトレス、店長、経営者など）',
			'アミューズメント関連〈カラオケ、遊園地、ゲーセン、イベント会場〉（店員、店長、経営者、イベント会場のコンパニオンなど）',
			'ファッション関係者〈和装、洋装、理容、美容、エステなど〉（ショップ店員、デザイナーなども含む）',
			'運輸・配送業者（タクシー、トラック、地下鉄、漁船、飛行機、宇宙船まで含む）',
			'犯罪者（万引きレベルに始まり、殺し屋、テロリストなども含む）', '聖職者（役職、宗派問わず）' ];
	lists[2] = [ '思わぬ人（モノ）と再会する', 'きっかけとなる出来事：思わぬ人（モノ）と出会う',
			'会いたかった人（モノ）と出会う or 再会する', '会いくなかった人（モノ）と出会う or 再会する',
			'望んでいたモノ（物質、情報、立場など）が届く（手に入る）', '望んでいなかったモノ（物質、情報、立場など）が届く（手に入る）',
			'予期していなかったモノ（物質、情報、立場など）が届く（手に入る）', '自分が事件 or 事故を起こしてしまう',
			'自分が事件 or 事故に巻き込まれてしまう', '身近な人が事件 or 事故を起こしてしまう',
			'身近な人が事件 or 事故に巻き込まれてしまう', '見ようとして事件 or 事故を目撃する',
			'見るつもりなかったのに事件 or 事故を目撃する', '立場や職業に関連した理由で指令を受ける',
			'立場や職業に無関係な理由で指令を受ける', 'プライベートに関連した理由で指令を受ける',
			'プライベートに無関係な理由で指令を受ける', '見知らぬ場所で目覚める or 見知らぬ場所に到着する',
			'予定外の場所で目覚める or 予定外の場所に到着する', '気がつくと、すべての記憶がなくなっている',
			'気がつくと、部分的に記憶がなくなっている', '気がつくと、身近な人のすべての記憶がなくなっている',
			'気がつくと、身近な人の部分的な記憶がなくなっている', '知らないうちに、世の中がすっかり悪い状況に変わっている',
			'知らないうちに、世の中がすっかり良い状況に変わっている', '知らないうちに、自分の肉体が悪く変化している',
			'知らないうちに、自分の肉体が良く変化している', '信じていた人に裏切られる or 騙される',
			'信じてくれていた人を裏切る or 騙す', '人違いされて、迷惑するor 迷惑をかける',
			'人違いされて、自分にとって好都合 or 他人にとって好都合', '人違いして、迷惑するor 迷惑をかける',
			'人違いして、自分にとって好都合 or 他人にとって好都合', '大切なもの（物質、人、情報、地位、名誉など）を失う',
			'知られると自分が困る、という秘密を抱えてしまう', '知られると誰か他人が困る、という秘密を抱えてしまう' ];
	lists[3] = [ '個室', '建物', '街', '国', '世界', 'その他（個室、建物、街、国、世界以外）' ];
	lists[4] = [ 'ヒューマンドラマ or コメディ', 'アクション', 'ラブストーリー', 'サスペンス or ミステリー',
			'SF or ファンタジー', 'ホラー' ];

	var timer = document.getElementById("timer");
	var initTime = 600;
	var time = initTime;
	var counter;
	var listObj = [];
	listObj[1] = document.getElementById("list1");
	listObj[2] = document.getElementById("list2");
	listObj[3] = document.getElementById("list3");
	listObj[4] = document.getElementById("list4");
	listObj[5] = document.getElementById("list5");

	timer.onclick = function() {
		if (time == initTime) {
			item();
//			timer.innerHTML = time;
//			time -= 1;
			counter = setInterval(count, 1000);
		} else {
			timer.innerHTML = "START";
			time=initTime;
			clearInterval(counter);

		}
	}
	
	function count(){
		if(time > 0){
			time-=1;
			timer.innerHTML = timerHyouji(time);
		}else{
			timer.innerHTML ="終了";
			time=initTime;
			clearInterval(counter);
		}
	}
	
	function timerHyouji(time){
		var timeText;
		timeText = ('00'+Math.floor(time/60)).slice(-2)+":"+('00'+(time%60)).slice(-2);
		return timeText;
	}

	function item() {
		var t = [];
		for (i = 0; i < 5; i++) {
			var num = Math.floor(Math.random() * lists[i].length);
			t[i] = lists[i][num];
		}
		listObj[1].innerHTML = t[0];
		listObj[2].innerHTML = t[1];
		listObj[3].innerHTML = t[2];
		listObj[4].innerHTML = t[3];
		listObj[5].innerHTML = t[4];

	}
}
