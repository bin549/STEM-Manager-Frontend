<template>
  <d2-container :class="{ 'page-compact': crud.pageOptions.compact }">
    <d2-crud-x
      ref="d2Crud"
      v-bind="_crudProps"
      v-on="_crudListeners"
      crud.options.tableType="vxe-table"
    >
      <div slot="header">
        <crud-search
          ref="search"
          :options="crud.searchOptions"
          @submit="handleSearch"
        />
        <el-button-group>
          <el-button size="small" type="primary" @click="addRow"
            ><i class="el-icon-plus" /> 新增</el-button
          >
        </el-button-group>
        <crud-toolbar
          :search.sync="crud.searchOptions.show"
          :compact.sync="crud.pageOptions.compact"
          @refresh="doRefresh()"
          @columns-filter-changed="handleColumnsFilterChanged"
        />
      </div>
    </d2-crud-x>
  </d2-container>
</template>

<script>
import * as api from "./api";
import { crudOptions } from "./crud";
import { d2CrudPlus } from "d2-crud-plus";

export default {
  name: "course",
  mixins: [d2CrudPlus.crud],
  data() {
    return {};
  },
  methods: {
    getCrudOptions() {
      return crudOptions(this);
    },
    pageRequest(query) {
      return api.fetchList(query);
    },
    addRequest(row) {
      console.log("api", api);
      return api.createObj(row);
    },
    updateRequest(row) {
      console.log("----", row);
      return api.updateObj(row);
    },
    delRequest(row) {
      return api.deleteObj(row.id);
    },
    createPermission(scope) {
      this.$router.push({
        name: "menuButton",
        params: { id: scope.row.id },
        query: { name: scope.row.name },
      });
    },
    searchFiles() {
      const files = require.context("@/views", true, /\.vue$/);
      const result = [];
      files.keys().forEach((key) => {
        result.push({
          label: key.replace(/(\.\/|\.vue)/g, ""),
          value: key.replace(/(\.\/|\.vue)/g, ""),
        });
      });
      return result;
    },
  },
};
</script>

<style lang="scss">
.yxtInput {
  .el-form-item__label {
    color: #49a1ff;
  }
}
</style>
