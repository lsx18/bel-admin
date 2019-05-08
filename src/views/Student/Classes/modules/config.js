// /**
//  * 学员课程 - 班级管理
//  * @author lsx
//  * @version 2019-05-07
//  */
// import { createButton } from '@/utils'

// export function editInit() {
//   return {
//     classes_name: '',
//     teach_material_name: '',
//     customer_relationships_name: '',
//     teacher_item: '',
//     student_total: '',
//     created_at: '',
//     classes_status_name: ''
//   }
// }

// // 搜索配置
// export function searchConfig() {
//   return {
//     // 关键字检索范围
//     likeKeys: [],
//     // 选择关键字
//     likeKey: 'classes_name',
//     query: {
//       // 字段搜索
//       'equal[classes_status_name]': null
//     }
//   }
// }

// export function colConfig(that) {
//   return [
//     {
//       title: '班级名称',
//       key: 'classes_name',
//       align: 'center'
//     },
//     {
//       title: '教材版本',
//       key: 'teach_material_name',
//       align: 'center'
//     },
//     {
//       title: '排课专员',
//       key: 'customer_relationships_name',
//       align: 'center'
//     },
//     {
//       title: '教师',
//       key: 'teacher_item',
//       align: 'center'
//     },
//     {
//       title: '上班人数',
//       key: 'student_total',
//       align: 'center',
//       sortable: 'custom'
//     },
//     {
//       title: '创建日期',
//       key: 'created_at',
//       align: 'center',
//       sortable: 'custom'
//     },
//     {
//       title: '状态',
//       key: 'classes_status_name',
//       align: 'center'
//     },
//     {
//       title: '操作',
//       key: '17',
//       width: 130,
//       align: 'center',
//       render: createButton([
//         {
//           text: '删除',
//           type: 'error',
//           click: ({ id }) => that.deleteItem(id)
//         },
//         {
//           text: '修改',
//           type: 'primary',
//           click: that.toUpdate
//         }
//       ])
//     }
//   ]
// }
