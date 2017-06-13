import { createButton } from '@/utils'

export default function (that) {
  return [
    {
      title: '来访日期',
      key: 'visited_at',
      align: 'center',
      width: 95,
      fixed: 'left',
    },
    {
      title: '家长姓名',
      key: 'elder_name',
      align: 'center',
      width: 90,
      fixed: 'left',
    },
    {
      title: '学员姓名',
      key: 'student_name',
      align: 'center',
      width: 90,
      fixed: 'left',
    },
    {
      title: '学校',
      key: 'school_name',
      align: 'center',
      width: 120,
    },
    {
      title: '年级',
      key: 'grade_name',
      align: 'center',
      width: 80,
    },
    {
      title: '联系方式',
      key: 'mobile',
      align: 'center',
      width: 120,
    },
    {
      title: '邀约咨询师',
      key: '7',
      align: 'invited_teacher_name',
      width: 100,
    },
    {
      title: '签约咨询师',
      key: '8',
      align: 'center',
      width: 100,
    },
    {
      title: '途径',
      key: '9',
      align: 'center',
      width: 80,
    },
    {
      title: '市场专员',
      key: 'market_staff_name',
      align: 'center',
      width: 90,
    },
    {
      title: '是否签约',
      key: '11',
      align: 'center',
      width: 90,
    },
    {
      title: '签约日期',
      key: '12',
      align: 'center',
      width: 95,
    },
    {
      title: '合同金额',
      key: '13',
      align: 'center',
      width: 90,
    },
    {
      title: '实收金额',
      key: '14',
      align: 'center',
      width: 100,
    },
    {
      title: '是否全款',
      key: '15',
      align: 'center',
      width: 90,
    },
    {
      title: '二次上门日期',
      key: 'return_visited_at',
      align: 'center',
      width: 120,
    },
    {
      title: '操作',
      key: '17',
      align: 'center',
      width: 110,
      fixed: 'right',
      render: createButton([
        { icon: 'trash-a', type: 'error', click: that.toDelete },
        { icon: 'edit', type: 'primary', click: that.toUpdate },
      ]),
    },
  ]
}
