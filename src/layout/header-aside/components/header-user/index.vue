<template>
  <el-dropdown size="small" class="d2-mr">
    <span class="btn-text">{{
      info.name ? `你好 ${info.name}` : "未登录"
    }}</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="userInfo">
        <d2-icon name="cog" class="d2-mr-5" />个人信息
      </el-dropdown-item>
      <el-dropdown-item @click.native="logOff" divided>
        <d2-icon name="power-off" class="d2-mr-5" />
        注销
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("d2admin/user", ["info"]),
  },
  methods: {
    ...mapActions("d2admin/account", ["logout"]),
    logOff() {
      this.logout({
        confirm: true,
      });
    },
    userInfo() {
      this.$router.push({ path: "userInfo" });
    },
  },
};
</script>
