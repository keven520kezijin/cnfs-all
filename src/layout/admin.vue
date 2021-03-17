<template>
  <div class="admin-wrapper">
    <el-container class="main-box">
      <el-header class="header-box" height="78px">
        <div class="logo-box">
          <router-link to="/"><img src="@/assets/logo_black.svg" alt="" /></router-link>
        </div>
        <div class="header-r">
          <ul>
            <li class="search-box">
              <el-input
                v-model="search.key"
                prefix-icon="el-icon-search"
                placeholder="搜索文档、设备、资源"
              ></el-input>
            </li>
            <li class="back-home">
              <router-link class="home" to="/"><img src="~@/assets/admin/home.svg" alt=""></router-link>
            </li>
            <li class="message">
              <a href="javscript:;" class="msg-icon iconfont iconxiaoxitongzhi" />
            </li>
            <li class="user-avatar" :style="`background-image:url('${loginUser.headPhoto}')`" />
          </ul>
        </div>
      </el-header>
      <el-container class="container-box">
        <el-aside width="200px" class="aside-box">
          <el-menu default-active="2" class="el-menu-vertical-demo" router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span slot="title">账号管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="userIntroduce">基本资料</el-menu-item>
                <el-menu-item index="certification">实名认证</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-comment"></i>
                <span>站内消息</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="info?type=0">全部消息</el-menu-item>
                <el-menu-item index="info?type=1">未读消息</el-menu-item>
                <el-menu-item index="info?type=2">已读消息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="beansAccount">
              <i class="el-icon-menu"></i>
              <span slot="title">存豆账户</span>
            </el-menu-item>
            <el-menu-item index="panelPoint">
              <i class="el-icon-share"></i>
              <span slot="title">我的节点</span>
            </el-menu-item>
            <el-menu-item index="storageService">
              <i class="el-icon-s-claim"></i>
              <span slot="title">存储服务</span>
            </el-menu-item>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>城市合伙人</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="partner">城市合伙人</el-menu-item>
                <el-menu-item index="news">发布新闻资讯</el-menu-item>
                <el-menu-item index="carousel">发布轮播图</el-menu-item>
                <el-menu-item index="promotionReward"
                  >申请推广奖励</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="invite">
              <i class="el-icon-s-order"></i>
              <span slot="title">我的邀请</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <router-view class="app-main" />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      search: {
        // key: "",
      },
    }
  },
  computed: {
    ...mapState({
      loginUser: state => state.loginUser,
    }),
  },
};
</script>

<style lang="scss" scoped>
::v-deep a {
  color: #000;
}
::v-deep .el-submenu {
  text-align: left;
  .el-menu-item {
    text-align: left;
  }
}
.el-menu-item {
  text-align: left;
}
.app-main {
  width: 100%;
}
.admin-wrapper {
  height: 100%;
  display: flex;
  .main-box {
    height: 100%;
    display: flex;
    .header-box {
      display: flex;
      justify-content: space-between;
      padding: 0;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px 0px;
      .logo-box {
        height: 100%;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 100px;
        img {
          height: 36px;
        }
      }
      .header-r {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-right: 20px;
        box-sizing: border-box;
        ul {
          width: 100%;
          display: flex;
          align-items: center;
          li {
            padding: 0 8px;
            margin: 0 3px;
            &.search-box {
              width: 300px;
              padding-right: 40px;
            }
            &.back-home {
              img {
                width: 22px;
              }
            }
            &.user-avatar {
              width: 35px;
              height: 35px;
              border-radius: 100%;
              background-color: rgb(241, 245, 250);
              background-repeat: no-repeat;
              background-position: center 6px;
              background-size: 90%;
              cursor: pointer;
            }
          }
        }

        .msg-icon {
          width: 22px;
          height: 30px;
          font-size: 22px;
          display: flex;
          align-items: center;
        }
        .user-avatar {
          height: 50px;
          width: 50px;
          border-radius: 25px 25px;
        }
      }
    }
    .container-box {
      .aside-box {
        background-color: #eaedf1;
        .el-menu {
          background: none;
        }
      }
    }
  }
}
</style>