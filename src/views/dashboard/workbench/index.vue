<template>
  <d2-container>
    <div class="page-header">
      <el-avatar
        src="https://q1.qlogo.cn/g?b=qq&amp;nk=190848757&amp;s=640"
        class="user-avatar"
      >
      </el-avatar>
      <div class="title">
        <h1>早安, Toby, 开始您一天的工作吧！</h1>
        <span> 今日晴，20℃ - 32℃！ </span>
      </div>
    </div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>快捷导航</span>
            </div>
            <el-row>
              <el-col
                :span="8"
                v-for="({ name, icon, route, color }, index) of navigators"
                :key="index"
                style="padding: 0"
              >
                <el-card shadow="hover">
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      flex-direction: column;
                      cursor: pointer;
                    "
                    @click="
                      () => {
                        gotoRoute(route);
                      }
                    "
                  >
                    <d2-icon-svg
                      :name="icon"
                      style="width: 25px; height: 25px"
                      :style="{ fill: color }"
                    />
                    <div
                      style="
                        text-align: center;
                        font-size: 12px;
                        margin-top: 20px;
                      "
                      v-text="name"
                    ></div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-card>
          <!-- <el-card class="box-card" style="margin-top: 25px">
            <div class="work">
              <d2-icon-svg
                name="work"
                style="
                  margin-left: 50%;
                  transform: translateX(-50%);
                  height: 216px;
                "
              />
            </div>
          </el-card> -->
        </div>
      </el-col>
    </el-row>
  </d2-container>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";

use([CanvasRenderer]);
export default {
  name: "workbench",
  data() {
    return {
      navigators: [
        {
          name: "角色管理",
          icon: "role",
          route: {
            name: "role",
          },
          color: "rgb(191, 12, 44);",
        },
        {
          name: "菜单管理",
          icon: "menu",
          route: {
            name: "menu",
          },
          color: "rgb(63, 178, 127);",
        },
      ],
    };
  },
  methods: {
    gotoRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped lang="scss">
$userAvatarLength: 72px;

.page-header {
  box-sizing: border-box;
  padding: 16px;
  .user-avatar {
    width: $userAvatarLength;
    height: $userAvatarLength;
    line-height: $userAvatarLength;
    display: inline-block;
  }
  .title {
    display: inline-block;
    padding: 0 0 0 15px;
    position: relative;
    top: -5px;
    h1 {
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1.75rem;
    }
    span {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
}
.project-detail {
  color: rgba(0, 0, 0, 0.45);
  height: 65px;
  img {
    width: 25px;
    height: 25px;
  }
  .name {
    margin-left: 1rem;
    font-size: 1rem;
    line-height: 2rem;
    height: 2rem;
    display: inline-block;
    color: rgba(0, 0, 0, 0.85);
    position: relative;
    top: -5px;
  }
  .slogan {
    font-size: 12px;
    padding: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .team {
    font-size: 14px;
  }
}
.activity {
  padding: 0;
  .activity-avatar {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .activity-detail {
    padding: 10px;
    line-height: 15px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
  }
}
.chart {
  height: 408px;
}

.el-divider--horizontal {
  margin: 4px 0;
  background: 0 0;
  border-top: 1px solid #e8eaec;
}
.el-card,
.el-message {
  border-radius: 0;
}
</style>
