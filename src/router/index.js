import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import HelloWorld from '@/components/HelloFromVux'
//首页
import Index from '@/components/index'
import Login from '@/components/login/index'
import Register from '@/components/register/index'
//文章
import ArticleIndex from '@/components/article/index'
import ArticleDetail from '@/components/article/detail'
import ArticlePublish from '@/components/article/publish'
//问答
import AnswerDetail from '@/components/answer/detail'
import AnswerIndex from '@/components/answer/index'
import AnswerPublish from '@/components/answer/publish'
import AnswerList from '@/components/answer/list'
//吐槽
import TucaoDetail from '@/components/tucao/detail'
import TucaoPublish from '@/components/tucao/publish'
import TucaoList from '@/components/tucao/list'
//社区
import CommunityIndex from '@/components/community/index'
//技术
import SkillList from '@/components/skill/list'
import SkillDetail from '@/components/skill/detail'
import SkillComment from '@/components/skill/comment'
import SkillPublish from '@/components/skill/publish'
//视频
import FilmList from '@/components/film/list'
import FilmDetail from '@/components/film/detail'
//个人信息
import Identity from '@/components/account/identity'
import Person from '@/components/account/person'
import Workupload from '@/components/account/workupload'
// 个人中心
import Account from '@/components/account/account'
import AccountWorks from '@/components/account/works'
import AccountArticle from '@/components/account/article'
import AccountLove from '@/components/account/love'
import AccountCircle from '@/components/account/circle'
import AccountSelf from '@/components/account/self'
import AccountAbout from '@/components/account/about'
//其他人
import ElseAccount from '@/components/else/account'
import ElseWorks from '@/components/else/works'
import ElseArticle from '@/components/else/article'
import ElseLove from '@/components/else/love'
import ElseJianjie from '@/components/else/jianjie'



let subPath = ''
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: subPath + '/',
      name: 'Indexx',
      component: Index
    }, {
      path: subPath + '/index',
      name: 'Index',
      component: Index
    }, {
      path: subPath + '/login',
      name: 'Login',
      component: Login
    }, {
      path: subPath + '/register',
      name: 'Register',
      component: Register
    }, {
      path: subPath + '/article/index',
      name: 'ArticleIndex',
      component: ArticleIndex
    }, {
      path: subPath + '/article/detail/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    }, {
      path: subPath + '/article/publish',
      name: 'ArticlePublish',
      component: ArticlePublish
    }, {
      path: subPath + '/answer/detail/:id',
      name: 'AnswerDetail',
      component: AnswerDetail
    }, {
      path: subPath + '/answer/index',
      name: 'AnswerIndex',
      component: AnswerIndex
    }, {
      path: subPath + '/answer/publish',
      name: 'AnswerPublish',
      component: AnswerPublish
    }, {
      path: subPath + '/answer/list',
      name: 'AnswerList',
      component: AnswerList
    }, {
      path: subPath + '/tucao/detail/:id',
      name: 'TucaoDetail',
      component: TucaoDetail
    }, {
      path: subPath + '/tucao/publish',
      name: 'TucaoPublish',
      component: TucaoPublish
    }, {
      path: subPath + '/tucao/list',
      name: 'TucaoList',
      component: TucaoList
    }, {
      path: subPath + '/community/index',
      name: 'CommunityIndex',
      component: CommunityIndex
    }, {
      path: subPath + '/skill/publish',
      name: 'SkillPublish',
      component: SkillPublish
    }, {
      path: subPath + '/skill/list',
      name: 'SkillList',
      component: SkillList
    }, {
      path: subPath + '/skill/detail/:id',
      name: 'SkillDetail',
      component: SkillDetail
    }, {
      path: subPath + '/skill/comment',
      name: 'SkillComment',
      component: SkillComment
    }, {
      path: subPath + '/film/list',
      name: 'FilmList',
      component: FilmList
    }, {
      path: subPath + '/film/detail/:id',
      name: 'FilmDetail',
      component: FilmDetail
    }, {
      path: subPath + '/account/identity',
      name: 'AccountIdentity',
      component: Identity
    }, {
      path: subPath + '/account/person',
      name: 'AccountPerson',
      component: Person
    }, {
      path: subPath + '/account/workupload',
      name: 'AccountWorkupload',
      component: Workupload
    }, {
      path: subPath + '/account',
      name: 'Account',
      component: Account,
      children: [{
        path: '',
        name: 'AccountWorks',
        component: AccountWorks
      }, {
        path: 'works',
        name: 'AccountWorks',
        component: AccountWorks
      }, {
        path: 'article',
        name: 'AccountArticle',
        component: AccountArticle
      }, {
        path: 'love',
        name: 'AccountLove',
        component: AccountLove
      }, {
        path: 'circle',
        name: 'AccountCircle',
        component: AccountCircle
      }, {
        path: 'self',
        name: 'AccountSelf',
        component: AccountSelf
      }, {
        path: 'about',
        name: 'AccountAbout',
        component: AccountAbout
      }, ]
    }, {
      path: subPath + '/else/:id',
      name: 'ElseAccount',
      component: ElseAccount,
      children: [{
        path: '',
        name: 'ElseWorks',
        component: ElseWorks
      }, {
        path: 'works',
        name: 'ElseWorks',
        component: ElseWorks
      }, {
        path: 'article',
        name: 'ElseArticle',
        component: ElseArticle
      }, {
        path: 'love',
        name: 'ElseLove',
        component: ElseLove
      }, {
        path: 'jianjie',
        name: 'ElseJianjie',
        component: ElseJianjie
      }, ]
    }


  ]
})