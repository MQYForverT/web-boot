<template>
    <div class="layout-navbars-breadcrumb-user">
        <div class="layout-navbars-breadcrumb-user-icon mr10" @click="onScreenfullClick">
            <SvgIcon
                class="iconfont"
                :name="!state.isScreenfull ? 'icon-fullscreen' : 'icon-tuichuquanping'"
                :title="state.isScreenfull ? '开全屏' : '关全屏'"
            />
        </div>
        <el-dropdown :hide-timeout="50" :show-timeout="70" @command="onHandleCommandClick">
            <span class="layout-navbars-breadcrumb-user-link">
                <img class="layout-navbars-breadcrumb-user-link-photo mr5" :src="userInfo.avatar" />
                {{ userInfo.nickname === '' ? 'test' : userInfo.nickname }}
                <el-icon class="el-icon--right">
                    <ele-ArrowDown />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="logOut" :divided="false">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
    import { useGlobal } from '@store';
    import { useRouter } from 'vue-router';
    import { ElMessageBox, ElMessage } from 'element-plus';
    import screenfull from 'screenfull';
    import { resetRoute } from '@router/index';
    import { clearLocal } from '@utils/storage';

    const router = useRouter();

    const state = reactive({
        isScreenfull: false,
    });
    // 获取用户信息 pinia
    const storesUseGlobal = useGlobal();
    const { userInfo } = storeToRefs(storesUseGlobal);
    // 全屏点击时
    const onScreenfullClick = () => {
        if (!screenfull.isEnabled) {
            ElMessage.warning('暂不不支持全屏');
            return false;
        }
        screenfull.toggle();
        state.isScreenfull = !state.isScreenfull;
    };

    // 下拉菜单点击时
    const onHandleCommandClick = (path) => {
        if (path === 'logOut') {
            ElMessageBox({
                closeOnClickModal: false,
                closeOnPressEscape: false,
                type: 'warning',
                title: '提示',
                message: '此操作将退出登录, 是否继续?',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true;
                        instance.confirmButtonText = '退出中';
                        setTimeout(() => {
                            done();
                            setTimeout(() => {
                                instance.confirmButtonLoading = false;
                            }, 300);
                        }, 700);
                    } else {
                        done();
                    }
                },
            })
                .then(() => {
                    clearLocal(); // 清除缓存/token等
                    resetRoute(); // 删除/重置路由
                    storesUseGlobal.setToken();
                    router.push('/login');
                    setTimeout(() => {
                        ElMessage.success('安全退出成功！');
                    }, 300);
                })
                .catch(() => {});
        } else {
            router.push(path);
        }
    };
</script>

<style scoped lang="scss">
    .layout-navbars-breadcrumb-user {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
        &-link {
            height: 100%;
            display: flex;
            align-items: center;
            white-space: nowrap;
            &-photo {
                width: 35px;
                height: 35px;
                border-radius: 100%;
            }
        }
        &-icon {
            padding: 0 10px;
            cursor: pointer;
            color: var(--bg-topBarColor);
            height: 50px;
            line-height: 50px;
            display: flex;
            align-items: center;
            &:hover {
                background: rgba(0, 0, 0, 0.04);
                i {
                    display: inline-block;
                    animation: logoAnimation 0.3s ease-in-out;
                }
            }
        }
        :deep(.el-dropdown) {
            color: var(--bg-topBarColor);
        }
        :deep(.el-badge) {
            height: 40px;
            line-height: 40px;
            display: flex;
            align-items: center;
        }
        :deep(.el-badge__content.is-fixed) {
            top: 12px;
        }
    }
</style>
