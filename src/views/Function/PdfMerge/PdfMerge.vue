<template>
  <div class="w-full h-full p-10px box-border">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="flex justify-between">
              <span>合并多个pdf文件</span>
              <el-button type="primary" class="button" @click="mergePdf()"
                >合并</el-button
              >
            </div>
          </template>
          <input type="file" multiple ref="filesRef" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { PDFDocument } from "pdf-lib";
import { ref } from "vue";

const filesRef = ref<HTMLInputElement>();

const mergePdf = () => {
  const allPromise = [...filesRef.value?.files!].map((el: File) => {
    return new Promise((r) => {
      r(el.arrayBuffer());
    });
  });

  Promise.all(allPromise).then(async (requests: any) => {
    // 以首个pdf作为主文件，进行添加页面操作
    const pdfDoc = await PDFDocument.load(requests[0]);

    for (let i = 1; i < requests.length; i++) {
      const secondPdf = await PDFDocument.load(requests[i]);

      const secondPdfPages = await pdfDoc.copyPages(
        secondPdf,
        secondPdf.getPageIndices()
      );

      secondPdfPages.forEach((page) => {
        pdfDoc.addPage(page);
      });
    }

    const mergedPdfBytes = await pdfDoc.save();

    const link = document.createElement("a");

    link.href = URL.createObjectURL(
      new Blob([mergedPdfBytes], { type: "application/pdf" })
    );

    link.download = "merge";
    link.click();
  });
};
</script>
