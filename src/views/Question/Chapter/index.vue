<template>
  <div class="question-chapter">
    <!-- 搜索栏 -->
    <Form inline class="app-search-form">
      <!-- 年段学科 -->
      <Form-item>
        <Select
          v-model="query[`equal[grade_range_subject_id]`]"
          placeholder="选择年段学科"
          style="width:9em;"
        >
          <Option
            v-for="item in subjects"
            :value="item.value"
            :key="item.value"
          >
            {{item.display_name}}
          </Option>
        </Select>
      </Form-item>
      <!-- 教材版本 -->
      <Form-item>
        <Select
          v-model="query[`equal[teach_material]`]"
          placeholder="选择教材版本"
          style="width:9em;"
        >
          <Option
            v-for="item in materials"
            :value="item.value"
            :key="item.value"
          >
            {{item.display_name}}
          </Option>
        </Select>
      </Form-item>
      <!-- 关键字检索 -->
      <Form-item>
        <Input placeholder="搜索关键字" v-model="likeValue">
          <Select
            v-model="likeKey"
            slot="prepend"
            style="width: 7em"
          >
            <Option
              v-for="likeKey in likeKeys"
              :key="likeKey.value"
              :value="likeKey.value"
            >
              {{ likeKey.label }}
            </Option>
          </Select>
        </Input>
      </Form-item>
      <!-- 搜索 -->
      <Form-item>
        <Button type="primary" icon="ios-search" @click="search">搜索</Button>
      </Form-item>
    </Form>

    <Row class="app-content-header" type="flex" justify="space-between">
      <Col>
        <h2>章节列表</h2>
      </Col>
      <Col>
        <Button type="primary">编辑章节</Button>
      </Col>
    </Row>

    <!--班级管理表格-->
    <Table
      class="app-table"
      :columns="columns"
      :data="list.data"
      border
      @on-sort-change="sort"
    ></Table>

    <!--分页-->
    <app-pager
      :data="list"
      @on-change="goTo"
      @on-page-size-change="pageSizeChange"
    ></app-pager>

  </div>
</template>

<script>
/**
 * 题库中心 - 章节
 *
 * @author
 */

// import { mapState } from 'vuex'
import { list } from '@/mixins'
import { GLOBAL } from '@/store/mutationTypes'
// import { Question } from '@/store/mutationTypes'
import { createButton } from '@/utils'
import cdata from './cdata'

export default {
  name: 'question-chapter',

  mixins: [list],

  data() {
    return {
      likeKeys: [
        { label: '章节名称', value: 'display_name' },
        { label: '上级', value: 'p_id' },
        { label: '知识点', value: 'knowledge' },
      ],
      likeKey: 'display_name',
      query: {
        'equal[grade_range_subject_id]': null,
        'equal[teach_material]': null,
      },

      subjects: [
        { display_name: '高中数学', value: 1 },
        { display_name: '高中语文', value: 2 },
        { display_name: '高中英语', value: 3 },
        { display_name: '高中物理', value: 4 },
      ],

      materials: [
        { display_name: '人教版', value: 1 },
        { display_name: '沪教版', value: 2 },
        { display_name: '黄冈版', value: 3 },
      ],

      list: cdata,

      columns: [
        { title: '章节编号', key: 'number', align: 'center' },
        { title: '章节名称', key: 'display_name', align: 'center' },
        { title: '上级', key: 'p_id', align: 'center' },
        { title: '包含知识点', key: 'have_knowledge', align: 'center' },
        { title: '关联知识点', key: 'relation_knowledge', align: 'center' },
        {
          title: '操作',
          key: 10,
          align: 'center',
          width: 180,
          render: createButton([
            { text: '编辑', type: 'success', click: row => this.openManageModal(row.id) },
          ]),
        },
      ],


    }
  },

  created() {
    this.$store.commit(GLOBAL.LOADING.HIDE)
  },
}
</script>

<style lang="less">

</style>