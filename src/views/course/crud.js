export const crudOptions = (vm) => {
    return {
        pageOptions: {
          compact: true
        },
        options: {
          tableType: 'vxe-table',
          rowKey: true, // 必须设置，true or false
          rowId: 'id',
          height: '100%', // 表格高度100%, 使用toolbar必须设置
          highlightCurrentRow: false
        },
        rowHandle: {
            view: {
              thin: true,
              text: '详情',
              disabled() {
                return !vm.hasPermissions('Retrieve')
              }
            },
            width: 160,
            edit: {
              thin: true,
              text: '',
              show: false,
              disabled() {
                return !vm.hasPermissions('Update')
              }
            },
            remove: {
              thin: true,
              text: '删除',
              show: false,
              disabled() {
                return !vm.hasPermissions('Delete')
              }
            }
        },
        viewOptions: {
          componentType: 'form'
        },
        columns: [
              {
                title: '关键词',
                key: 'search',
                show: false,
                disabled: true,
                search: {
                  disabled: false
                },
                form: {
                  show: false,
                  component: {
                    placeholder: '请输入关键词'
                  }
                }
              },
              {
                title: 'ID',
                key: 'id',
                width: 90,
                disabled: true,
                form: {
                  disabled: true
                }
              },
              {
                title: 'title',
                key: 'title',
                search: {
                  disabled: true
                },
                width: 100,
                component: { props: { color: 'auto' } } // 自动染色
              },

              {
                title: 'description',
                key: 'description',
                search: {
                  disabled: true
                },
                width: 100,
                component: { props: { color: 'auto' } } // 自动染色
              },
              {
                title: 'cover_img',
                key: 'cover_img',
                search: {
                  disabled: true
                },
                width: 100,
                component: { props: { color: 'auto' } } // 自动染色
              },

                            {
                              title: '创建时间',
                              key: 'created_time',
                              width: 160,
                              show: false,
                              type: 'datetime',
                              form: {
                                disabled: true
                              }
                            },

                              {
                                title: 'owner',
                                key: 'owner',
                                search: {
                                  disabled: true
                                },
                                width: 100,
                                component: { props: { color: 'auto' } } // 自动染色
                              },
              {
                title: 'genre',
                key: 'genre',
                search: {
                  disabled: true
                },
                width: 100,
                component: { props: { color: 'auto' } } // 自动染色
              },

              {
                title: 'is_visible',
                key: 'is_visible',
                search: {
                  disabled: true
                },
                width: 100,
                component: { props: { color: 'auto' } } // 自动染色
              },
              {
                title: 'get_absolute_url',
                key: 'get_absolute_url',
                search: {
                  disabled: true
                },
                width: 100,
                component: { props: { color: 'auto' } } // 自动染色
              },

              {
                title: 'get_image',
                key: 'get_image',
                search: {
                  disabled: true
                },
                width: 100,
                component: { props: { color: 'auto' } } // 自动染色
              },

                            {
                              title: 'get_student_url',
                              key: 'get_student_url',
                              search: {
                                disabled: true
                              },
                              width: 100,
                              component: { props: { color: 'auto' } } // 自动染色
                            },
                                          {
                                            title: 'serial_number',
                                            key: 'serial_number',
                                            search: {
                                              disabled: true
                                            },
                                            width: 100,
                                            component: { props: { color: 'auto' } } // 自动染色
                                        },


        ]
    }
}
