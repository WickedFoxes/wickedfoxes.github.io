<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="css/styles.css">
        <title>프리코네 6성 개화 도우미</title>
    </head>
    <body>  
        <!--Tittle-->
        <header>
            <!-- Main Tittle -->
            <div id="tittle-text">
                <h1>프린세스 커넥트! Re:Dive</h1>
                <h2>6성 개화 도우미</h2>
            </div>
            <img src="priconne-images/tittle.webp">
            <!-- Navigation -->
            <div id="navigation-bar">
                <button id="navigation-MP-calculator" type="button" onclick="MP_calculator_hide(); location.href='#container-MP-calculator';" >메모리 피스 계산기</button>
                <button id="navigation-pure-MP-calculator" type="button" onclick="pure_MP_calculator_hide(); location.href='#container-pure-MP-calculator';">퓨어 메모리 피스 계산기</button>
                <button id="navigation-main-VH" type="button" onclick="main_VH_hide(); location.href='#container-main-VH';"><a>메인 베리하드 퀘스트 공략</a></button>
                <button id="navigation-six-star" type="button">6성해방퀘스트</button>
            </div>
        </header>
         <!-- main-VH -->
        <section id="container-main-VH" style="display:none">
            <!--Main-VH-Select-Tittle-->
            <div id="main-VH-tittle">
                <!--tittle-->
                <hl>메인 베리하드 퀘스트</hl>
                <!--select-->
                <div class="character-setting">
                    <select id="character-main-VH-list-select" onchange="getVHCharacterView();">
                        <option value="default_character">[캐릭터...]</option>
                        <option value="VH18-1">VH 18-1 | 페코린느</option>
                        <option value="VH18-2">VH 18-2 | 콧코로</option>
                        <option value="VH18-3">VH 18-3 | 캬루</option>
                        <option value="VH19-1">VH 19-1 | 리노</option>
                        <option value="VH19-2">VH 19-2 | 리마</option>
                        <option value="VH19-3">VH 19-3 | 이오</option>
                        <option value="VH20-1">VH 20-1 | 유카리</option>
                    </select>
                    <div id="characer-view">
                        <img id="preset-character-image" src="priconne-images/unit-icon/Placeholder.webp">
                        <label id="preset-character-name-label"></label>
                    </div>
                </div>
            </div>
            <!--Main-VH-Character-Imformation-->
            <div id="main-VH-information">
                <!-- VH 18-1 페코린느 -->
                <div id="main-VH-info-18-1" style="display:none">
                    <div class="info-tips">
                        <h4>출처<a href="https://gamewith.jp/pricone-re/article/show/164575">https://gamewith.jp/pricone-re/article/show/16457</a></h4>
                        <h1 class="title main_title">중요 포인트와 요령</h1>
                        <h2 class="title sub_title">3열을 조심하자</h2>
                        <p>3번째 캐릭터가 표적이 되기 쉽다.3번째의 캐릭터를 회복할 수 있는 편성으로 하거나,도발탱커를 넣어 공격이 날아가지 않게 하자.</p>
                        <h2 class="title sub_title">튼튼한 페코린느</h2>
                        <h3 class="title check_tittle">페코린느 전용장비 스킬 주의</h3>
                        <p>페코린느 섀도우는 전용장비를 장착했을 때의 스킬을 사용한다.페코린느는 회복하면서 흡수장벽을 전개하므로 내구력이 높다는 점을 주의하자.</p>
                        <h3 class="title check_tittle">방어 디버프와 광역 딜을 준비하자</h3>
                        <p>페코린느 섀도우는 회복 스킬이나 방어 버프를 사용한다.방어 디버프나 광역 화력이 높은 딜러가 없으면 다 쓰러뜨리지 못하고 끝날 수 있는 점에 주의하자.</p>
                        <h3 class="title check_tittle">페코린느의 핵심, 런치타임+</h3>
                        <p>페코린느의 핵심은 회복 스킬인 런치 타임.런치타임은 스턴 등 행동 불능 기술로 중단시킬 수 있다.회복/흡수 장벽을 전개시키지 않고 싸울 수 있으므로,페코린느를 쓰러뜨리기 쉬워진다.</p>
                        <h2 class="title sub_title">스컹크 대책 필요</h2>
                        <h3 class="title check_tittle">암흑 상태로 공격 명중률이 떨어진다</h3>
                        <p>스컹크는 암흑 상태를 부여하는 몬스터다. 암흑을 당하면 물리 공격의 명중률이 상당히 낮아지기 때문에, 그렇지 않아도 내구력이 높은 페코린느를 돌파하기 어려워진다.</p>
                        <h3 class="title check_tittle">배치 조절로 피해를 줄이자</h3>
                        <p>파티내의 캐릭터의 배치를 너무 가까이하면, 범위 암흑을 받아 꽤 운요소가 강한 전투가 되어 버린다.암흑의 범위 밖에서 공격할 수 있는 캐릭터를 1, 2개를 편성할 수 있으면, 안정적으로 대미지를 줄 수 있다.</p>
                        <p>신년 유이 한정이지만, 장벽으로 암흑을 막고 무이미 등으로 극딜을 넣는 것도 효과적이다.</p>
                        <h3 class="title check_tittle">스컹크는 2번째 배치이므로 암흑이 걸린다</h3>
                        <p>스컹크의 공격은 miss시키면 암흑에 걸리지 않는다. 18-1vh에서 등장하는 스컹크는 서있는 위치가 2번째이므로 먼저 암흑을 부여하면 공격을 miss시키기 쉬워진다.</p>
                    </div>
                    <div class="info-member">
                        <h1 class="title main_title">클리어 조합</h1>
                        <h2 class="title sub_title">LV70~79</h2>
                        <p>
                            LV70 신년콧코로, 무이미, 네네카(서포트), 신년유이, 수캬루<br>
                            LV72 쥰/3성11R, 안나/3성11R전장, 콧코로/3성10R, 네네카(서포트), 신년유이/3성11R<br>
                            LV74 신년콧코로(서포트), 무이미/3성12R, 마코토/4성11R, 크리스티나/3성12R, 치카<br>
                            LV78 쿠우카/4성11R전장, 네네카/5성11R, 미사토/2성8R, 캬루(서포트)/6성, 루나/3성11R<br>
                            LV78 프린세스페코린느/5성12R, 신년콧코로(서포트), 무이미/4성12R, 크리스티나/4성12R, 네네카/4성12R<br>
                            lV79 프린세스페코린느, 마코토, 크리스티나, 유카리, 프린세스콧코로<br>
                        </p>
                        <h2 class="title sub_title">LV80~89</h2>
                        <p>
                            LV84 쥰, 노조미, 히요리(서포트)/6성, 크리스티나, 유이<br>
                            LV86 노조미, 마코토, 크리스티나, 네네카, 미사토<br>
                            LV86 신년콧코로, 크리스티나, 유카리, 네네카, 리노(서포트)/6성<br>
                        </p>
                        <a href="priconne-images/clear/VH18-1_LV72.jpg" target="_blank"><img src="priconne-images/clear/VH18-1_LV72.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-1_LV74.jpg" target="_blank"><img src="priconne-images/clear/VH18-1_LV74.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-1_LV78.jpg" target="_blank"><img src="priconne-images/clear/VH18-1_LV78.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-1_LV78(1).jpg" target="_blank"><img src="priconne-images/clear/VH18-1_LV78(1).jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-1_LV84.jpg" target="_blank"><img src="priconne-images/clear/VH18-1_LV84.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-1_LV86.jpg" target="_blank"><img src="priconne-images/clear/VH18-1_LV86.jpg" width="300" height="200"></a>
                    </div>
                </div>
                <!-- VH 18-2 콧코로 -->
                <div id=main-VH-info-18-2 style="display:none">
                    <div class="info-tips">
                        <h4>출처<a href="https://gamewith.jp/pricone-re/article/show/164579">https://gamewith.jp/pricone-re/article/show/164579</a></h4>
                        <h1 class="title main_title">중요 포인트와 요령</h1>
                        <h2 class="title sub_title">전체회복 캐릭터를 사용하자</h2>
                        <p>2WAVE의 3열 공격이나, 3WAVE의 범위 마법 공격으로 뒤의 캐릭터도 대미지를 받기 쉽다.광역 힐러를 넣어 아군 전체를 회복할 수 있도록 해 두자.</p>
                        <h2 class="title sub_title">강력한 콧코로</h2>
                        <h3 class="title check_tittle">물리 탱커를 고용하자</h3>
                        <p>콧코로의 스킬 「트라이슬러시+」의 화력이 높고, 물리 내구가 높은 탱커가 아니면 계속 견디는 것이 어렵다. 미야코(푸딩)등을 선두로 하고, 탱커가 쓰러지지 않도록 하자.</p>
                        <h3 class="title check_tittle">강력한 콧코로 UB</h3>
                        <p>콧코로 UB에 의한 전체 버프량이 높고, 주변 몬스터가 주는 피해가 꽤 높아진다.가능한 한 적수를 빠르게 줄일 수 있도록, 방어 디버프를 유지하거나 단체 화력이 높은 캐릭터를 넣자.</p>
                        <p>특히 구름형 몬스터 '엘더 클라우드'의 범위 마법공격이 아파진다.서포트 캐릭터로는 전체 회복+마방 버프 부여가 가능한 린 등을 추천한다.</p>
                        <h3 class="title check_tittle">콧코로를 먼저 처치하는 방법도 존재한다</h3>
                        <p>콧코로는 노조미의 스턴스킬 타이밍에 「트라이슬러시+」로 앞으로 이동해 온다.이때 스턴이 적중하면 콧코로를 맨 앞줄에 앉히는 것이 가능하다.콧코로가 UB를 여러번 사용하기 전에 먼저 쓰러뜨려 버리자.</p>
                        <p>다만 타이밍이 어긋날 수 있으므로, 콧코로를 기절시킬 때까지 노조미의 UB는 사용하지 않는 것이 좋다.</p>
                    </div>
                    <div class="info-member">
                        <h1 class="title main_title">클리어 조합</h1>
                        <h2 class="title sub_title">LV70~79</h2>
                        <p>
                            LV69 히요리(서포트)/6성, 유카리, 프린세스콧코로, 유이, 유키<br>
                            LV70 신년콧코로, 수영복사렌, 리노(서포트)/6성, 신년유이, 마호<br>
                            LV74 콧코로(서포트)/6성, 네네카, 마법소녀카스미, 신년유이, 루나<br>
                        </p>
                        <h2 class="title sub_title">LV80~89</h2>
                        <p>
                            LV80 미야코, 네네카, 리노(서포트)/6성, 미사토, 유이<br>
                            LV83 미야코, 노조미, 유카리, 네네카(서포트)/6성, 유이<br>
                            LV83 신년콧코로(서포트), 앤, 네네카, 카스미, 유이<br>
                        </p>
                        <a href="priconne-images/clear/VH18-2_LV69.jpg" target="_blank"><img src="priconne-images/clear/VH18-2_LV69.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-2_LV70.jpg" target="_blank"><img src="priconne-images/clear/VH18-2_LV70.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-2_LV74.jpg" target="_blank"><img src="priconne-images/clear/VH18-2_LV74.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-2_LV80.jpg" target="_blank"><img src="priconne-images/clear/VH18-2_LV80.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-2_LV83(1).jpg" target="_blank"><img src="priconne-images/clear/VH18-2_LV83(1).jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-2_LV83.jpg" target="_blank"><img src="priconne-images/clear/VH18-2_LV83.jpg" width="300" height="200"></a>
                    </div>
                </div>
                <!-- VH 18-3 캬루 -->
                <div id=main-VH-info-18-3 style="display:none">
                    <div class="info-tips">
                        <h4>출처<a href="https://gamewith.jp/pricone-re/article/show/164584">https://gamewith.jp/pricone-re/article/show/164584</a></h4>
                        <h1 class="title main_title">중요 포인트와 요령</h1>
                        <h2 class="title sub_title">마법 딜러 공략 추천</h2>
                        <p>전열 캐릭터를 넣은 물리 편성은 캬루의 마방 디버프를 받은 상태에서 캬루의 UB를 받고 쓰러지는 경우가 있다.전열 탱커+후열 마법 딜러와 같이 디버프를 받지 않는 편성으로 짤 수 있으면 좋다.</p>
                        <h2 class="title sub_title">캬루의 디버프와 UB 대책</h2>
                        <h3 class="title check_tittle">전체 회복 힐러를 사용하자</h3>
                        <p>캬루의 UB는 상당한 데미지를 입힌다.회복 없이는 캬루의 UB를 견딜 수 없기때문에, 미사토와 같은 힐러을 넣어 딜러가 쓰러지지 않고 싸울 수 있도록 하자.</p>
                        <h3 class="title check_tittle">물리 딜러는 마법방어 버프가 필요하다</h3>
                        <p>마법 딜러를 구성하는 것이 어려운 경우에는 전용 장비가 있는 린을 편성하는 것이 좋다.린의 버프 범위내에서 싸울 수 있는 딜러를 편성하면 쓰러지지 않고 싸우기 쉬워진다.</p>
                    </div>
                    <div class="info-member">
                        <h1 class="title main_title">클리어 조합</h1>
                        <h2 class="title sub_title">LV70~79</h2>
                        <p>
                            LV70 유카리(서포트)/6성, 네네카, 신년유이, 수영복캬루, 마호<br>
                            LV75 쿠우카, 안나, 네네카(서포트), 미사토, 신년유이<br>
                            LV77 유카리(서포트)/6성, 네네카, 마법소녀카스미, 신년유이, 루나<br>
                        </p>
                        <h2 class="title sub_title">LV80~89</h2>
                        <p>
                            LV82 유카리(서포트)/6성, 네네카, 카스미, 미사토, 유니<br>
                            LV83 미야코, 쿠우카, 유카리, 네네카(서포트), 신년유이<br>
                            LV90 신년콧코로, 노조미, 무이미, 유카리(서포트)/6성, 네네카<br>
                        </p>
                        <a href="priconne-images/clear/VH18-3_LV70.jpg" target="_blank"><img src="priconne-images/clear/VH18-3_LV70.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-3_LV75.jpg" target="_blank"><img src="priconne-images/clear/VH18-3_LV75.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-3_LV77.jpg" target="_blank"><img src="priconne-images/clear/VH18-3_LV77.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-3_LV82.jpg" target="_blank"><img src="priconne-images/clear/VH18-3_LV82.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-3_LV83.jpg" target="_blank"><img src="priconne-images/clear/VH18-3_LV83.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH18-3_LV90.jpg" target="_blank"><img src="priconne-images/clear/VH18-3_LV90.jpg" width="300" height="200"></a>
                    </div>
                </div>
                <!-- VH 19-1 리노 -->
                <div id=main-VH-info-19-1 style="display:none">
                    <div class="info-tips">
                        <h4>출처<a href="https://gamewith.jp/pricone-re/article/show/170585">https://gamewith.jp/pricone-re/article/show/170585</a></h4>
                        <h1 class="title main_title">중요 포인트와 요령</h1>
                        <h2 class="title sub_title">광역 UB에 대비하자</h2>
                        <p>리노의 범위 UB로 파티 전체가 손상을 받기 쉽다. 전체 회복이 가능한 힐러을 편성하자. 힐러를 여럿 사용하면 회복 공급이 늦지 않는다.</p>
                        <h2 class="title sub_title">원펀이 되는 경우, 물리 방어 버프를 넣자</h2>
                        <p>레벨이나 장비의 사정으로 리노 UB에 원펀되는 경우에는 방어 버프를 가진 캐릭터를 추가하자. 물리 방어력을 늘리면 리노 UB를 견디기 쉬워진다</p>
                    </div>
                    <div class="info-member">
                        <h1 class="title main_title">클리어 조합</h1>
                        <h2 class="title sub_title">LV70~79</h2>
                        <p>
                            LV69 미야코, 프린세스콧코로, 하츠네(서포트)/6성, 유이, 유키<br>
                            LV70 유키라(서포트)/6성, 네네카, 신년유이, 수영복캬루, 마호<br>
                            LV76 신년콧코로, 콧코로, 네네카(서포트), 신년유이, 유이<br>
                        </p>
                        <h2 class="title sub_title">LV80~89</h2>
                        <p>
                            LV85 리마(서포트)/6성, 쿠우카, 무이미, 네네카, 신년유이<br>
                            LV88 미야코, 프린세스페코린느, 수영복사렌, 하츠네(서포트)/6성, 마호<br>
                            LV90 신년콧코로, 노조미, 무이미, 유카리(서포트)/6성, 네네카<br>
                        </p>
                        <a href="priconne-images/clear/VH19-1_LV69.jpg" target="_blank"><img src="priconne-images/clear/VH19-1_LV69.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH19-1_LV70.jpg" target="_blank"><img src="priconne-images/clear/VH19-1_LV70.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH19-1_LV76.jpg" target="_blank"><img src="priconne-images/clear/VH19-1_LV76.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH19-1_LV85.jpg" target="_blank"><img src="priconne-images/clear/VH19-1_LV85.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH19-1_LV88.jpg" target="_blank"><img src="priconne-images/clear/VH19-1_LV88.jpg" width="300" height="200"></a>
                        <a href="priconne-images/clear/VH19-1_LV90.jpg" target="_blank"><img src="priconne-images/clear/VH19-1_LV90.jpg" width="300" height="200"></a>
                    </div>
                </div>
                <!-- VH 19-2 리마 -->
                <div id=main-VH-info-19-2 style="display:none">
                    <div class="info-tips">
                        <h4>출처<a href="https://gamewith.jp/pricone-re/article/show/174554">https://gamewith.jp/pricone-re/article/show/174554</a></h4>
                        <h1 class="title main_title">중요 포인트와 요령</h1>
                        <h2 class="title sub_title">마지막 열 공격 주의</h2>
                        <p>wave3에는 원거리 공격이 여럿 구성되어 있으며, 마지막 열 캐릭터에게 가해지는 대미지가 높다. 마지막 열에 내구성이 높은 캐릭터를 편성하면서 도발 탱커를 사용하여 대미지를 분산시키자.</p>
                        <h2 class="title sub_title">마법 딜러가 대미지를 입히기 쉽다</h2>
                        <p>리마는 물리 방어력이 높고, 물리 내구를 높이는 기술과 UB을 가진 캐릭터이다. 물리딜 보다 마법딜이 대미지를 입히기 쉽기 때문에 마법 딜러 파티를 추천한다.</p>
                    </div>
                </div>
                <!-- VH 19-3 이오 -->
                <div id=main-VH-info-19-3 style="display:none">
                    <div class="info-tips">
                        <h4>출처<a href="https://gamewith.jp/pricone-re/article/show/178751">https://gamewith.jp/pricone-re/article/show/178751</a></h4>
                        <h1 class="title main_title">중요 포인트와 요령</h1>
                        <h2 class="title sub_title">이오 섀도우에 대한 대책을 세우자</h2>
                        <h3 class="title check_tittle">유혹의 피해를 줄이자</h3>
                        <p>19-3vh에서는 화력이 높은 적이 없다. 유혹으로 인한 사고가 캐릭터가 죽는 요인이 된다.유혹을 대비하면서 정면으로 돌파해 나가는 형태가 클리어하기 좋다.</p>
                        <h2 class="title sub_title">유혹 대책 방법</h2>
                        <h3 class="title check_tittle">유혹 대책 1:도발꾼 쌓기</h3>
                        <p>도발 캐릭터를 편성함으로써, 유혹시의 공격을 도발중의 캐릭터로 유도할 수 있다.딜러끼리 서로 때리면 치명타 등으로 쓰러지는 경우가 있으므로 도발 캐릭터를 사용하여 위험을 줄이자.</p>
                        <h3 class="title check_tittle">유혹 대책 2: 대열 조정</h3>
                        <p>유혹은 가까운 캐릭터끼리 서로 공격하므로 딜러를 나란히 배치하지 않으면 쉽게 쓰러지지 않는다.도발을 사용하는 것으로 충분할지도 모르지만, 보험을 들고 싶다면 해 두는 게 좋다.</p>
                        <h3 class="title check_tittle">유혹 대책 3: 방어 버프 쌓기</h3>
                        <p>파티의 딜러에 맞춘 방어 버프 캐릭터를 편성하여 아군간의 피해를 줄일 수있다. 네네카을 넣을 때는 마법 방어 버프 캐릭터를 편성 해두면 견디기 쉽다.</p>
                        <h3 class="title check_tittle">유혹 대책 4 : 보호막으로 방지</h3>
                        <p>이오의 유혹은 마법장벽으로 막으면 부여되지 않으므로 장벽을 편성할 수도 있다. 다만 이전에 장막이 깨질 수 있으므로 이오 UB 앞에서 장벽을 전개할 필요가 있다.</p>
                    </div>
                </div>
                <!-- VH 20-1 유카리 -->
                <div id=main-VH-info-20-1 style="display:none">
                    <div class="info-tips">
                        <h4>출처<a href="https://gamewith.jp/pricone-re/article/show/182152">https://gamewith.jp/pricone-re/article/show/182152</a></h4>
                        <h1 class="title main_title">중요 포인트와 요령</h1>
                        <h2 class="title sub_title">범위 암흑에 대처하자</h2>
                        <h3 class="title check_tittle">마법 딜러는 암흑에 당하지 않고 싸울 수 있다.</h3>
                        <p>20-1vh에서는 회피율이 높은 리틀 고블린이나 범위 암흑을 부여하는 스팅크 스컹크가 많이 등장한다.마법이라면 암흑을 신경 쓰지 않고 싸울 수 있기 때문에 마법 딜러를 추천한다.</p>
                        <h3 class="title check_tittle">물리딜 조합은 배치를 분산시키자</h3>
                        <p>유카리는 마법방어 버프나 배리어를 부여하므로, 물리공격이 피해의 성능 자체는 좋다. 물리딜 조합으로 도전하는 경우에는, 범위 어둠을 받는 캐릭터를 줄일 수 있도록 딜러를 분산하여 배치하자.</p>
                    </div>
                </div>
            </div>
        </section>
         <!-- memory-piece-calculator -->
         <section id="container-MP-calculator" style="display:none">
            <h1>6성 캐릭터 메모리 피스 계산기</h1>
            <div class="character-setting">
                <select id="character-list-select" onchange="getCharacterView();">
                    <option value="default_character">[캐릭터...]</option>
                    <option value="VH18-1">페코린느</option>
                    <option value="VH18-2">콧코로</option>
                    <option value="VH18-3">캬루</option>
                    <option value="VH19-1">리노</option>
                    <option value="VH19-2">리마</option>
                    <option value="VH19-3">이오</option>
                    <option value="VH20-1">유카리</option>
                </select>
                <div id="characer-view">
                    <img id="preset-character-image" src="priconne-images/unit-icon/Placeholder.webp">
                    <label id="preset-character-name-label"></label>
                </div>
            </div>
            <input type='number' id="">ㄱ</input>
            <input type='number' id="">ㄴ</input>
            <input type='number' id="">ㄷ</input>
        </section>
        <!-- pure-memory-piece-calculator -->
        <section id="container-pure-MP-calculator" style="display:none">
            <h1>6성 캐릭터 퓨어 메모리 피스 계산기</h1>
            <div class="character-setting">
                <select id="character-list-select" onchange="getCharacterView();">
                    <option value="default_character">[캐릭터...]</option>
                    <option value="VH18-1">페코린느</option>
                    <option value="VH18-2">콧코로</option>
                    <option value="VH18-3">캬루</option>
                    <option value="VH19-1">리노</option>
                    <option value="VH19-2">리마</option>
                    <option value="VH19-3">이오</option>
                    <option value="VH20-1">유카리</option>
                </select>
                <div id="characer-view">
                    <img id="preset-character-image" src="priconne-images/unit-icon/Placeholder.webp">
                    <label id="preset-character-name-label"></label>
                </div>
            </div>
            <input type='number' id="">ㄱ</input>
            <input type='number' id="">ㄴ</input>
            <input type='number' id="">ㄷ</input>
        </section>
        <!-- Script -->
        <script src="js/scripts.js"></script>
    </body>
</html>
