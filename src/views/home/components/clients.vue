<template>
    <div
    class="clients-container"
    data-aos="zoom-in"
    data-aos-delay="100"
    data-aos-once="true"
    >
    <div class="logo_wrap">
        <img
        src="@/assets/images/dash/mask_logo.png"
        class="left_mask mask"
        />
        <img
        src="@/assets/images/dash/mask_logo.png"
        class="right_mask mask"
        />
        <div class="item-container line_odd">
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-9.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-1.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-2.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-3.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-4.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-9.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-1.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-2.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-3.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-4.png" />
        </el-card>
        </div>
        <div class="item-container line_even">
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-10.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-5.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-6.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-7.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-8.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-10.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-5.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-6.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-7.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-8.png" />
        </el-card>
        </div>
        <div class="item-container line_odd">
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-14.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-13.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-9.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-11.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-12.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-14.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-13.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-9.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-11.png" />
        </el-card>
        <el-card class="c-card">
            <img src="@/assets/images/dash/c-12.png" />
        </el-card>
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
// @import '~@/styles/variables.scss';
@keyframes scrollToRight {
  from {
    transform: translate3d(-50%, 0, 0);
  }

  to {
    transform: translate3d(0%, 0, 0);
  }
}

.clients-container {
    padding: 0px 0 20px;
    .item-container {
        display: flex;
        justify-content: center;
        //flex-wrap: wrap;
    }
    .logo_wrap {
        width: 1200px;
        //border: 1px solid red;
        margin: 0 auto;
        overflow: hidden;
        position: relative;

        .mask {
            position: absolute;
            z-index: 10;
        }

        .left_mask {
            left: -100px;
        }

        .right_mask {
            right: -100px;
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        }

        .logo_wrap .line_odd {
        width: 2860px;
        //-webkit-animation: scrollToRight 36s linear infinite;
        animation: scrollToRight 16s linear infinite;
        }

        .logo_wrap .line_even {
        width: 2860px;
        //-webkit-animation: scrollToRight-data-v-6a32e916 30s linear infinite;
        animation: scrollToRight 10s linear infinite;
        }

        .c-card {
        width: 286px;
        margin: 10px;

        ::v-deep .el-card__body {
            height: 158px;
            width: 286px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}

 @media screen and (max-width: 900px) {
     .clients-container {
         .c-card {
             ::v-deep .el-card__body {
                 width: 190px;
                 height: 80px;
             }
         }
     }
 }
</style>