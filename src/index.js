import './styles/stories.css';

import data from './assets/data/json.json';
// =====================================================
// import avatar images
// =====================================================
import avatar1 from './assets/img/avatar1.jpg';
import avatar2 from './assets/img/avatar2.jpg';
import avatar3 from './assets/img/avatar3.jpg';
import avatar4 from './assets/img/avatar4.jpg';
import avatar5 from './assets/img/avatar5.jpg';
import avatar6 from './assets/img/avatar6.jpg';
import avatar7 from './assets/img/avatar7.jpg';
import avatar8 from './assets/img/avatar8.jpg';
import avatar9 from './assets/img/avatar9.jpg';
import avatar10 from './assets/img/avatar10.jpg';
import avatar11 from './assets/img/avatar11.jpg';
import avatar12 from './assets/img/avatar12.jpg';

// =====================================================
// leader json from alias.leaders to alias : leaders
// =====================================================
const aliasLeaders = data[0].alias;
console.log(aliasLeaders);
const leadersTitle = data[0].data.title;
const leadersSubtitle = data[0].data.subtitle;
const leadersEmoji = data[0].data.emoji;
// =====================================================
// json to alias to user ID: 3
// =====================================================
const leadersUsersOne = data[0].data.users[0];
const leadersUsersOneId = leadersUsersOne.id;
const leadersUsersOneName = leadersUsersOne.name;
const leadersUsersOneAvatar = avatar3;
const leadersUsersOneText = leadersUsersOne.valueText;
// =====================================================
// json to alias to user ID: 9
// =====================================================
const leadersUsersTwo = data[0].data.users[1];
const leadersUsersTwoId = leadersUsersTwo.id;
const leadersUsersTwoName = leadersUsersTwo.name;
const leadersUsersTwoAvatar = avatar9;
const leadersUsersTwoText = leadersUsersTwo.valueText;
// =====================================================
// json to alias to user ID: 7
// =====================================================
const leadersUsersThree = data[0].data.users[2];
const leadersUsersThreeId = leadersUsersThree.id;
const leadersUsersThreeName = leadersUsersThree.name;
const leadersUsersThreeAvatar = avatar7;
const leadersUsersThreeText = leadersUsersThree.valueText;
// =====================================================
// json to alias to user ID: 6
// =====================================================
const leadersUsersFour = data[0].data.users[3];
const leadersUsersFourId = leadersUsersFour.id;
const leadersUsersFourName = leadersUsersFour.name;
const leadersUsersFourAvatar = avatar6;
const leadersUsersFourText = leadersUsersFour.valueText;
// =====================================================
// json to alias to user ID: 8
// =====================================================
const leadersUsersFive = data[0].data.users[4];
const leadersUsersFiveId = leadersUsersFive.id;
const leadersUsersFiveName = leadersUsersFive.name;
const leadersUsersFiveAvatar = avatar8;
const leadersUsersFiveText = leadersUsersFive.valueText;
//
//
//
// =====================================================
// vote json from alias.vote to alias : vote
// =====================================================
const aliasVote = data[2].alias;
console.log(aliasVote);
const voteTitle = data[2].data.title;
const voteSubtitle = data[2].data.subtitle;
const voteEmoji = data[2].data.emoji;
//
//
//
// =====================================================
// chart json from alias.chart to alias : chart
// =====================================================
const aliasChart = data[6].alias;
console.log(aliasChart);
const ChartTitle = data[6].data.title;
const ChartSubtitle = data[6].data.subtitle;
// =====================================================
// chart values
// =====================================================
// chart one
const chartValueOne = data[6].data.values[0];
const chartValueOneTitle = data[6].data.values[0].title;
const chartValueOneValue = data[6].data.values[0].value;
// chart two
const chartValueTwo = data[6].data.values[1];
const chartValueTwoTitle = data[6].data.values[1].title;
const chartValueTwoValue = data[6].data.values[1].value;
// chart three
const chartValueThree = data[6].data.values[2];
const chartValueThreeTitle = data[6].data.values[2].title;
const chartValueThreeValue = data[6].data.values[2].value;
// chart four
const chartValueFour = data[6].data.values[3];
const chartValueFourTitle = data[6].data.values[3].title;
const chartValueFourValue = data[6].data.values[3].value;
// chart five
const chartValueFive = data[6].data.values[4];
const chartValueFiveTitle = data[6].data.values[4].title;
const chartValueFiveValue = data[6].data.values[4].value;
// chart six
const chartValueSix = data[6].data.values[5];
const chartValueSixTitle = data[6].data.values[5].title;
const chartValueSixValue = data[6].data.values[5].value;
// chart seven
const chartValueSeven = data[6].data.values[6];
const chartValueSevenTitle = data[6].data.values[6].title;
const chartValueSevenValue = data[6].data.values[6].value;
// chart eight
const chartValueEight = data[6].data.values[7];
const chartValueEightTitle = data[6].data.values[7].title;
const chartValueEightValue = data[6].data.values[7].value;
// chart nine
const chartValueNine = data[6].data.values[8];
const chartValueNineTitle = data[6].data.values[8].title;
const chartValueNineValue = data[6].data.values[8].value;
// chart ten
const chartValueTen = data[6].data.values[9];
const chartValueTenTitle = data[6].data.values[9].title;
const chartValueTenValue = data[6].data.values[9].value;
// chart eleven
const chartValueEleven = data[6].data.values[10];
const chartValueElevenTitle = data[6].data.values[10].title;
const chartValueElevenValue = data[6].data.values[10].value;
// chart twelth
const chartValueTwelth = data[6].data.values[11];
const chartValueTwelthTitle = data[6].data.values[11].title;
const chartValueTwelthValue = data[6].data.values[11].value;
// chart thirteen
const chartValueThirteen = data[6].data.values[12];
const chartValueThirteenTitle = data[6].data.values[12].title;
const chartValueThirteenValue = data[6].data.values[12].value;
// chart fourteen
const chartValueFourteen = data[6].data.values[13];
const chartValueFourteenTitle = data[6].data.values[13].title;
const chartValueFourteenValue = data[6].data.values[13].value;
// chart fiveteen
const chartValueFiveteen = data[6].data.values[14];
const chartValueFiveteenTitle = data[6].data.values[14].title;
const chartValueFiveteenValue = data[6].data.values[14].value;
// chart sixteen
const chartValueSixteen = data[6].data.values[15];
const chartValueSixteenTitle = data[6].data.values[15].title;
const chartValueSixteenValue = data[6].data.values[15].value;
//
//
//
// =====================================================
// diagram json from alias.chart to alias : diagram
// =====================================================
const diagramChart = data[8].alias;
console.log(diagramChart);
//
const diagramCategoriesOne = data[8].data.categories[0];
const diagramCategoriesTwo = data[8].data.categories[1];
const diagramCategoriesThree = data[8].data.categories[2];
const diagramCategoriesFour = data[8].data.categories[3];
// console.log(diagramCategories);
// //
const diagramTitle = data[8].data.title;
const diagramSubtitle = data[8].data.subtitle;
const diagramTotalText = data[8].data.totalText;
const diagramDifferenceText = data[8].data.differenceText;
//
const categoriesOneTitle = diagramCategoriesOne.title;
const categoriesOneValueText = diagramCategoriesOne.valueText;
const categoriesOneDifferenceText = diagramCategoriesOne.differenceText;
//
const categoriesTwoTitle = diagramCategoriesTwo.title;
const categoriesTwoValueText = diagramCategoriesTwo.valueText;
const categoriesTwoDifferenceText = diagramCategoriesTwo.differenceText;
//
const categoriesThreeTitle = diagramCategoriesThree.title;
const categoriesThreeValueText = diagramCategoriesThree.valueText;
const categoriesThreeDifferenceText = diagramCategoriesThree.differenceText;
//
const categoriesFourTitle = diagramCategoriesFour.title;
const categoriesFourValueText = diagramCategoriesFour.valueText;
const categoriesFourDifferenceText = diagramCategoriesFour.differenceText;
// =====================================================
// main function for render html templates
// =====================================================
const body = document.querySelector('body');
body.classList.add('theme__dark');

const bodyLight = document.querySelector('.theme__light');

window.renderTemplate = (alias, data) => {
  if (alias === 'leaders') {
    /* leaders result template */
    return (body.innerHTML = ` <div class="wrapper">
    <header class="header header-leaders">
      <div class="header__title">${leadersTitle}</div>
      <div class="header__subtitle">${leadersSubtitle}</div>
    </header>
    <main>
      <div class="chart">
        <!-- BLOCK FIVE -->
        <div class="chart__block five-chart">
          <div class="user user-leaders user-five user-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${leadersUsersFiveAvatar}"
                alt=""
              />
            </div>
            <div class="user__name">${leadersUsersFiveName}</div>
            <div class="user__caption">${leadersUsersFiveText}</div>
          </div>
          <div class="diagram diagram-five diagram-dark">5</div>
        </div>
        <!-- BLOCK FIVE -->

        <!-- BLOCK THIRD -->
        <div class="chart__block third-chart">
          <div class="user user-leaders user-third user-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${leadersUsersThreeAvatar}"
                alt=""
              />
            </div>
            <div class="user__name">${leadersUsersThreeName}</div>
            <div class="user__caption">${leadersUsersThreeText}</div>
          </div>
          <div class="diagram diagram-third diagram-dark">3</div>
        </div>
        <!-- BLOCK THIRD -->

        <!-- BLOCK FIRST -->
        <div class="chart__block first-chart">
          <div class="user user-leaders user-first user-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${leadersUsersOneAvatar}"
                alt=""
              />
              <span class="leader-emoji">${leadersEmoji}</span>
            </div>
            <div class="user__name">${leadersUsersOneName}</div>
            <div class="user__caption">${leadersUsersOneText}</div>
          </div>
          <div class="diagram diagram-first-dark">1</div>
        </div>
        <!-- BLOCK FIRST -->

        <!-- BLOCK SECOND -->
        <div class="chart__block second-chart">
          <div class="user user-leaders user-second user-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${leadersUsersTwoAvatar}"
                alt=""
              />
            </div>
            <div class="user__name">${leadersUsersTwoName}</div>
            <div class="user__caption">${leadersUsersTwoText}</div>
          </div>
          <div class="diagram diagram-second diagram-dark">2</div>
        </div>
        <!-- BLOCK SECOND -->

        <!-- BLOCK FOURTH -->
        <div class="chart__block fourth-chart">
          <div class="user user-leaders user-fourth user-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${leadersUsersFourAvatar}"
                alt=""
              />
            </div>
            <div class="user__name">${leadersUsersFourName}</div>
            <div class="user__caption">${leadersUsersFourText}</div>
          </div>
          <div class="diagram diagram-fourth diagram-dark">4</div>
        </div>
        <!-- BLOCK FOURTH -->
      </div>
    </main>
  </div>
  <!-- leaders slide -->
    `);
  } else if (alias === 'vote') {
    /* vote result template */

    return (body.innerHTML = `<div class="wrapper">
    <header class="header header-vote">
      <div class="header__title">${voteTitle}</div>
      <div class="header__subtitle">${voteSubtitle}</div>
    </header>

    <section class="vote-block">
      <section class="column first-column">
        <!-- first block -->
        <div class="vote firstUserInBlock">
          <div class="user user-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${avatar1}"
                alt=""
              />
            </div>
            <div class="user__name">Александр Иванков</div>
          </div>
        </div>
        <!-- first block -->

        <!-- second block -->
        <div class="vote vote-middle">
          <div class="user user-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${avatar12}"
                alt=""
              />
            </div>
            <div class="user__name">Александр Иванков</div>
          </div>
        </div>
        <!-- second block -->

        <!-- third block -->
        <div class="vote">
          <div class="user user-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${avatar5}"
                alt=""
              />
            </div>
            <div class="user__name">Александр Иванков</div>
          </div>
        </div>
        <!-- third block -->
      </section>
      <!-- USER VOTE -->

      <!-- USER VOTE -->
      <!-- fourth block -->
      <section class="column second-column">
        <button class="arrow top-arrow-dark"></button>
        <div class="vote vote-middle">
          <div class="user user-champion-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${avatar4}"
                alt=""
              />
              <span class="leader-emoji">${voteEmoji}</span>
            </div>
            <div class="user__name">Александр Иванков</div>
          </div>
        </div>

        <!-- fourth block -->

        <!-- five block -->
        <div class="vote vote-middle">
          <div class="user user-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${avatar11}"
                alt=""
              />
            </div>
            <div class="user__name">Александр Иванков</div>
          </div>
        </div>
        <button class="arrow bottom-arrow-dark"></button>
      </section>
      <!-- five block-->

      <!--  -->
      <section class="column third-column">
        <div class="vote">
          <div class="user user-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${avatar10}"
                alt=""
              />
            </div>
            <div class="user__name">Александр Иванков</div>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="vote lastUserInBlock">
          <div class="user user-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${avatar2}"
                alt=""
              />
            </div>
            <div class="user__name">Александр Иванков</div>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="vote">
          <div class="user user-dark">
            <div class="user__avatar">
              <img
                class="user-avatar-image"
                src="${avatar6}"
                alt=""
              />
            </div>
            <div class="user__name">Александр Иванков</div>
          </div>
        </div>
      </section>
      <!--  -->
    </section>
  </div>
  <!-- vote result -->
`);
  } else if (alias === 'chart') {
    /* chart result template */
    return (body.innerHTML = `<div class="wrapper">
    <header class="header header-leaders">
      <div class="header__title">${ChartTitle}</div>
      <div class="header__subtitle">${ChartSubtitle}</div>
    </header>
    <section class="chart-slide">
      <div class="chart-slide__diagram">

        <div style='height:${chartValueOneValue}px' class="chart-slide__diagram-item diagram-item-dark" >
          <span class="chart-slide__diagram-item diagram-item__result">${chartValueOneValue}</span>
          <span class="chart-slide__diagram-item diagram-item__numberOf"
            >${chartValueOneTitle}</span
          >
        </div>

        <div style='height:${chartValueTwoValue}px' class="chart-slide__diagram-item diagram-item-dark">
          <span style='height:${chartValueThreeValue}px' class="chart-slide__diagram-item diagram-item__result">${chartValueTwoValue}</span>
          <span class="chart-slide__diagram-item diagram-item__numberOf"
            >${chartValueTwoTitle}</span
          >
        </div>

        <div style='height:${chartValueThreeValue}px' class="chart-slide__diagram-item diagram-item-dark">
          <span class="chart-slide__diagram-item diagram-item__result">${chartValueThreeValue}</span>
          <span class="chart-slide__diagram-item diagram-item__numberOf"
            >${chartValueThreeTitle}</span
          >
        </div>

        <div style='height:${chartValueFourValue}px' class="chart-slide__diagram-item diagram-item-dark">
          <span class="chart-slide__diagram-item diagram-item__result">${chartValueFourValue}</span>
          <span class="chart-slide__diagram-item diagram-item__numberOf"
            >${chartValueFourTitle}</span
          >
        </div>

        <div style='height:${chartValueFiveValue}px' class="chart-slide__diagram-item diagram-item-dark">
          <span class="chart-slide__diagram-item diagram-item__result">${chartValueFiveValue}</span>
          <span class="chart-slide__diagram-item diagram-item__numberOf"
            >${chartValueFiveTitle}</span
          >
        </div>

        <div style='height:${chartValueSixValue}px' class="chart-slide__diagram-item diagram-item-dark">
          <span class="chart-slide__diagram-item diagram-item__result">${chartValueSixValue}</span>
          <span class="chart-slide__diagram-item diagram-item__numberOf"
            >${chartValueSixTitle}</span
          >
        </div>
        <div style='height:${chartValueSevenValue}px' class="chart-slide__diagram-item diagram-item-champion">
          <span class="chart-slide__diagram-item diagram-item__result">${chartValueSevenValue}</span>
          <span class="chart-slide__diagram-item diagram-item__numberOf"
            >${chartValueSevenTitle}</span
          >
        </div>
        <div style='height:${chartValueEightValue}px' class="chart-slide__diagram-item diagram-item-dark">
          <span class="chart-slide__diagram-item diagram-item__result">${chartValueEightValue}</span>
          <span class="chart-slide__diagram-item diagram-item__numberOf"
            >${chartValueEightTitle}</span
          >
        </div>
        <div style='height:${chartValueNineValue}px' class="chart-slide__diagram-item diagram-item-dark">
          <span class="chart-slide__diagram-item diagram-item__result">${chartValueNineValue}</span>
          <span class="chart-slide__diagram-item diagram-item__numberOf"
            >${chartValueNineTitle}</span
          >
        </div>
        <div style='height:${chartValueTenValue}px' class="chart-slide__diagram-item diagram-item-dark">
          <span class="chart-slide__diagram-item diagram-item__result">${chartValueTenValue}</span>
          <span class="chart-slide__diagram-item diagram-item__numberOf"
            >${chartValueTenTitle}</span
          >
        </div>
      </div>
      <div class="chart-slide__leaders">
        <div class="chart-slide__user">
          <div class="chart-slide__user-avatar">
            <img
              class="user-avatar-image chart-avatar"
              src="${avatar3}"
              alt=""
            />
          </div>
          <div class="chart-slide__text">
            <div class="chart-slide__user-name">Дарья Ковалева</div>
            <div class="chart-slide__user-description">32</div>
          </div>
        </div>
        <span class="grey-line"></span>
        <div class="chart-slide__user">
          <div class="chart-slide__user-avatar">
            <img
              class="user-avatar-image chart-avatar"
              src="${avatar9}"
              alt=""
            />
          </div>
          <div class="chart-slide__text">
            <div class="chart-slide__user-name">Сергей Бережной</div>
            <div class="chart-slide__user-description">27</div>
          </div>
        </div>
      </div>
    </section>
  </div>
  `);
  } else if (alias === 'diagram') {
    /* diagram result template */
    return (body.innerHTML = `<div class="wrapper">
    <header class="header header-diagram">
      <div class="header__title">${diagramTitle}</div>
      <div class="header__subtitle">${diagramSubtitle}</div>
    </header>
      <div class="ellipse-block">
        <div class="ellipse">

          <div class="ellipse__text-inside">
            <div class="ellipse__title">${diagramTotalText}</div>
            <div class="ellipse__subtitle">${diagramDifferenceText}</div>
          </div>
        </div>
        <div class="ellipse-statistic">
          <ul class="ellipse-statistic__items">
            <li class="ellipse-statistic__item">
              ${categoriesOneTitle}<span class="plus-statictic">+8</span>
              <span class="all-statictic">30</span>
            </li>
            <li class="ellipse-statistic__item">
              ${categoriesTwoTitle}<span class="plus-statictic">+ 6</span>
              <span class="all-statictic">32</span>
            </li>
            <li class="ellipse-statistic__item">
            ${categoriesThreeTitle}<span class="plus-statictic">+ 16</span>
              <span class="all-statictic">58</span>
            </li>
            <li class="ellipse-statistic__item">
            ${categoriesFourTitle}<span class="plus-statictic">+ 12</span>
              <span class="all-statictic">62</span>
            </li>
          </ul>
        </div>
      </div>
  </div>
  `);
  } else if (alias === 'activity') {
    /* activity result template */
    return (body.innerHTML = `<div class="wrapper">
    <header class="header header-voteResult">
      <div class="header__title">Коммиты, 1 неделя</div>
      <div class="header__subtitle">Спринт № 213</div>
    </header>

    <div class="activity-block">

    </div>

    <div class="activity-statistic">
      <div class="activity-statistic__item">
        <span class="item-hour">1 час</span>
      </div>
      <div class="activity-statistic__item"><span class="item-hour">0</span></div>
      <div class="activity-statistic__item">
        <span class="item-hour">1 - 2</span>
      </div>
      <div class="activity-statistic__item">
        <span class="item-hour">3 - 4</span>
      </div>
      <div class="activity-statistic__item">
        <span class="item-hour">5 - 6</span>
      </div>
    </div>
  </div>
`);
  }
};
renderTemplate('vote');

// span for ellipse
{
  /* <span class="ellipse-first-item"></span>
<span class="ellipse-second-item"></span>
<span class="ellipse-third-item"></span>
<span class="ellipse-fourth-item"></span> */
}

// if (body === bodyLight) {
//   const secondColumn = document.querySelector('.second-column');
//   const voteMiddle = secondColumn.querySelector('.vote-middle');
//   const userChampionVote = voteMiddle.querySelector('.user-champion-dark');
//   userChampionVote.classList.remove('user-champion-dark');
//   userChampionVote.classList.add('user-champion-light');
//   const bottomArrowLight = secondColumn.querySelector('.bottom-arrow-dark');
//   bottomArrowLight.classList.remove('bottom-arrow-dark');
//   bottomArrowLight.classList.add('bottom-arrow-light');
//   // light for hoveк
//   const firstColumn = document.querySelector('.first-column');
//   const firstUserInBlock = firstColumn.querySelector('.firstUserInBlock');
//   const userDarkOne = firstUserInBlock.querySelector('.user-dark');
//   userDarkOne.classList.remove('user-dark');
//   userDarkOne.classList.add('user-light');
//   //
//   const voteMiddleHover = firstColumn.querySelector('.vote-middle');
//   const userDarkTwo = voteMiddleHover.querySelector('.user-dark');
//   userDarkTwo.classList.remove('user-dark');
//   userDarkTwo.classList.add('user-light');
//   //
// }

if (body === bodyLight) {
  body.classList.remove('theme__dark');
  let fiveChart = document.querySelector('.five-chart');
  let fiveChartDiagram = fiveChart.querySelector('.diagram-five');
  fiveChartDiagram.classList.remove('diagram-dark');
  fiveChartDiagram.classList.add('diagram-light');
  //
  let thirdChart = document.querySelector('.third-chart');
  let thirdChartDiagram = thirdChart.querySelector('.diagram-third');
  thirdChartDiagram.classList.remove('diagram-dark');
  thirdChartDiagram.classList.add('diagram-light');
  //
  let firstChart = document.querySelector('.first-chart');
  let firstChartDiagram = firstChart.querySelector('.diagram-first-dark');
  firstChartDiagram.classList.remove('diagram-first-dark');
  firstChartDiagram.classList.add('diagram-first-light');
  //
  let secondChart = document.querySelector('.second-chart');
  let secondChartDiagram = secondChart.querySelector('.diagram-second');
  secondChartDiagram.classList.remove('diagram-dark');
  secondChartDiagram.classList.add('diagram-light');
  //
  let fourthChart = document.querySelector('.fourth-chart');
  let fourthChartDiagram = fourthChart.querySelector('.diagram-fourth');
  fourthChartDiagram.classList.remove('diagram-dark');
  fourthChartDiagram.classList.add('diagram-light');
  // imageAvatar.style.filter = 'saturate(1)';
  //
}
// light theme for vote
//
