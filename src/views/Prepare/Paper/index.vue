<template>
  <div class="papercenter">
    <!-- 顶部搜索栏 -->
    <Form class="app-search-form app-search-form-layout">
      <!-- 关键字检索 -->
      <Form-item>
        <Input
          placeholder="搜索关键字"
          v-model="likeValue"
          style="width: calc(7em + 200px);"
        >
          <Select
            v-model="likeKey"
            slot="prepend"
            style="width: 7em"
          >
            <Option
              v-for="likeKey in likeKeys"
              :key="likeKey.field_name"
              :value="likeKey.field_name"
            >
              {{ likeKey.display_name }}
            </Option>
          </Select>
        </Input>
      </Form-item>
      <!-- 查询按钮 -->
      <Form-item>
        <Button
          type="primary"
          icon="ios-search"
          @click="search"
        >
          搜索
        </Button>
      </Form-item>
    </Form>

    <!-- 科目过滤 -->
    <ConditionRadioSubject
      v-if="subjects"
      :data="subjects.data"
      :default="subjects.default"
      @change="getPrecondition"
    />

    <!-- 上方条件过滤 -->
    <ConditionRadio
      v-for="(condition, key) in advanceConditions"
      :key="key"
      :label="condition.label"
      :data="condition.data"
      :tag="`equal[${key}]`"
    />

    <!-- 列表title栏 -->
    <div class="app-content-topbar">
      <h2>
        <svg
          class="svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1092 1024"
          width="16"
          height="16"
        >
          <path d="M283.375 415.812l239.411 117.146V257.843l-239.48-114.415v272.384zm284.467-155.17v272.725l236.203-114.414v-273.75l-236.203 115.37zM547.021 0L313.89 111.275l233.13 111.274 230.058-111.274L546.953 0zM0 883.917l239.411 117.214V726.016L0 611.601v272.384zm284.467-155.17v272.725L520.67 887.057v-273.75l-236.203 115.44zm-20.821-260.642L30.516 579.379l233.13 111.343 230.059-111.275-230.06-111.274zm307.883 415.812l239.41 117.214V726.016L571.53 611.601v272.384zm284.467-155.17v272.725l236.27-114.415v-273.75l-236.202 115.44zm-20.822-260.642L602.112 579.379l233.13 111.343 230.06-111.275-230.06-111.274z"/>
        </svg>
        试卷列表
      </h2>
      <Button
        type="primary"
        @click="v_toCompose"
      >智能组卷</Button>
    </div>

    <!-- 下方试卷列表 -->
    <Table
      border
      :columns="colConfig"
      :data="tableInfo.data"
      @on-sort-change="sort"
    ></Table>

    <!-- 底部分页 -->
    <app-pager
      :data="tableInfo"
      @on-change="goTo"
      @on-page-size-change="pageSizeChange"
    ></app-pager>
  </div>
</template>

<script>
/**
 * 备课管理 - 试卷中心
 *
 * @author huojinzhao
 */

import { list, tableCommon } from '@/mixins'
import { createButton } from '@/utils'
import {
  ConditionRadio,
  ConditionRadioSubject,
} from '@/views/components'

export default {
  name: 'PreparePaper',

  mixins: [list, tableCommon],

  components: {
    ConditionRadio,
    ConditionRadioSubject,
  },

  data() {
    return {
      /* --- 顶部搜索栏数据 --- */

      likeKeys: [],

      likeKey: 'display_name',

      /* --- 上方高级搜索数据 --- */

      subjects: null,

      advanceConditions: {},

      /* --- 下方试卷列表 --- */
      colConfig: [
        {
          title: '试卷标题',
          key: 'display_name',
          width: 400,
          align: 'center',
        },
        {
          title: '试题量',
          key: 'question_count',
          align: 'center',
        },
        {
          title: '来源',
          key: 'source_type_name',
          align: 'center',
        },
        {
          title: '创建人',
          key: 'user_name',
          align: 'center',
        },
        {
          title: '创建日期',
          key: 'created_at',
          align: 'center',
          sortable: 'custom',
        },
        {
          title: '浏览量',
          key: 'view_count',
          align: 'center',
        },
        {
          title: '操作',
          align: 'center',
          render: createButton([
            {
              text: '删除',
              type: 'error',
              click: ({ id }) => this.deleteItem(id),
            },
            {
              text: '编辑',
              type: 'success',
              click: this.v_toUpdate,
            },
            {
              text: '查看',
              type: 'primary',
              click: this.v_toCheck,
            },
          ]),
        },
      ],
    }
  },

  methods: {
    /* --- initialization --- */

    getPrecondition(subjectId) {
      /* eslint-disable prefer-template */
      const url = '/paper_center/index_before'
        + (subjectId ? `?grade_range_subject_id=${subjectId}` : '')
      /* eslint-enable */

      this.$http.get(url)
        .then(({
          // 条件搜索
          search_fields,
          // 高级搜索
          current_grade_range_subject_id,
          grade_range_subject_id,
          grade,
          paper_type,
          province,
          year,
          source_type,
        }) => {
          this.subjects = {
            default: current_grade_range_subject_id,
            data: grade_range_subject_id,
          }
          this.likeKeys = search_fields
          this.advanceConditions = {
            grade,
            paper_type,
            province,
            year,
            source_type,
          }
        })
    },

    /* --- Control --- */

    v_toCompose() {
      this.$router.push('/prepare/papercenter/smartpaper')
    },

    v_toUpdate() {
      //
    },

    v_toCheck({ id }) {
      this.$router.push(`/prepare/papercenter/check/${id}`)
    },
  },

  created() {
    const subjectId = this.$route.query['equal[grade_range_subject_id]']
    this.getPrecondition(subjectId)
  },
}
</script>

<style lang="less">

</style>