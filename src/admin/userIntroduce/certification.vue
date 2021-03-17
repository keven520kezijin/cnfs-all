<template>
  <div class="certification-page page">
    <p-title title="实名认证" />
    <p class="tip">实名认证决定了账号归属。如企业使用的账号进行个人实名认证，在人员变动交接账号或账号下财产出现纠纷时，可能对个人/企业都带来麻烦，甚至带来经济损失，并且可能影响提现和获取发票。</p>
    <div class="select-type container">
      <h3>选择认证类型</h3>
      <div class="content">
        <dl>
          <dt>
            <router-link to="/admin/cer-person"><img src="~@/assets/admin/certification/geren.png" alt="" /></router-link>
          </dt>
          <dd>
            <h5><router-link to="/admin/cer-person">个人实名认证 ></router-link></h5>
            <h6>适用于个人用户</h6>
            <!-- <p>相关文档：<router-link to="">个人如何完成实名认证 ></router-link></p> -->
          </dd>
        </dl>
        <dl>
          <dt>
            <router-link to="/admin/cer-enterprise"><img src="~@/assets/admin/certification/qiyie.png" alt="" /></router-link>
          </dt>
          <dd>
            <h5><router-link to="/admin/cer-enterprise">企业政府实名认证 ></router-link></h5>
            <h6>含企业、政府、事业单位、团体、组织</h6>
            <!-- <p>相关文档：<router-link to="">企业如何完成实名认证 ></router-link></p> -->
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import pTitle from "@/components/admin/pageTitle";
export default {
  components: {
    pTitle,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/styles/admin.scss';

.certification-page {
  .tip {
    font-size: 14px;
    line-height: 26px;
    padding: 10px 16px;
    background: #FDF9DC;
    text-align: left;
  }
  .select-type {
    margin-top: 50px;
    text-align: left;
    h3 {
      font-weight: bold;
      font-size: 20px;
    }
    .content {
      padding-top: 50px;
      display: flex;
      dl {
        width: 380px;
        text-align: center;
        padding: 40px 30px;
        box-shadow: #eee 0px 0px 15px;
        &:nth-child(1) {
          margin-right: 80px;
        }
        dd {
          padding-top: 22px;
          h5 {
            font-size: 24px;
            a {
              color: #2295FF;
            }
          }
          h6 {
            padding-top: 20px;
          }
          p {
            padding-top: 60px;
            
            a {
              color: #5E9CD5;
            }
          }
          p, h6 {
            font-size: 16px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>