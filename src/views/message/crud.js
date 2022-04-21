import { BUTTON_CHECK_BOOL } from '@/config/button'


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
            text: '',
          },
          edit: {
            thin: true,
            text: '',
            show: false,
          },
          remove: {
            thin: true,
            text: '',
          },
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
                width: 300,
                component: { props: { color: 'auto' } } // 自动染色
              },
              {
                title: 'content',
                key: 'content',
                search: {
                  disabled: true
                },
                width: 500,
                component: { props: { color: 'auto' } } // 自动染色
              },
              {
                title: 'sender',
                key: 'sender',
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
                title: '状态',
                key: 'is_read',
                type: 'dict-switch',
                search: {
                  disabled: false
                },
                dict: {
                  data: BUTTON_CHECK_BOOL
                },
                width: 60,
                component: { props: { color: 'auto' } }
              },
        ]
    }
}
