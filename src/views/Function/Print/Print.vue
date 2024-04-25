<template>
  <div class="w-full h-full p-20px box-border" id="printJS-html">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="flex justify-between">
              <span>打印JSON数据</span>
              <el-button type="primary" class="button" @click="printJson"
                >打印</el-button
              >
            </div>
          </template>
          <span v-text="JSON.stringify(someJSONdata)"></span>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import printJS from "print-js";

const someJSONdata = [
  {
    name: "John Doe",
    email: "john@doe.com",
    phone: "111-111-1111"
  },
  {
    name: "Barry Allen",
    email: "barry@flash.com",
    phone: "222-222-2222"
  },
  {
    name: "Cool Dude",
    email: "cool@dude.com",
    phone: "333-333-3333"
  }
];

const printJson = () => {
  printJS({
    printable: someJSONdata,
    properties: ["name", "email", "phone"],
    type: "json"
  });
};
</script>
