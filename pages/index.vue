<template>
  <div
    class="bg-[url(https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-fashion-line-art-blue-business-image_38863.jpg)] bg-no-repeat bg-cover p-5"
  >
    <h1 class="font-bold text-white text-center mb-10">
      Price List <br />
      Paket Nonton
    </h1>
    <div class="columns-4 gap-8 container mx-auto flex-wrap">
      <template v-for="product in products">
        <div class="bg-white mb-5 p-4 rounded-xl flex flex-col gap-4">
          <div
            class="flex items-center gap-2 justify-center flex-col text-center"
          >
            <div class="h-12 w-12 flex-shrink-0">
              <img
                :src="product.logo"
                alt="Logo"
                width="100%"
                height="100%"
                class="h-full w-full object-fill"
              />
            </div>
            <h2 class="uppercase font-bold text-h4">
              {{ product.title }}
            </h2>
          </div>

          <template v-for="item in product.type">
            <div v-if="item.count > 0">
              <p class="text-h6 font-semibold">
                {{ item.name }}
              </p>

              <ul>
                <template v-for="list in item.list">
                  <li v-if="list.is_shown" class="flex justify-between gap-2">
                    <p>
                      {{ list.name }}
                    </p>

                    <div class="flex justify-end gap-1">
                      <template v-if="env === 'admin'">
                        <p>{{ list.stock_price }}k</p>
                        <p>{{ list.real_price }}k</p>
                        <p>{{ list.profit }}k</p>
                      </template>
                      <p>{{ list.sell_price }}k</p>
                    </div>
                  </li>
                </template>
              </ul>
            </div>
          </template>

          <div>
            <div class="flex items-center gap-1">
              <i class="bx bxs-envelope-open text-xl"></i>
              <p class="text-lg font-semibold">Notes</p>
            </div>

            <ul>
              <template v-for="note in product.note">
                <li>
                  <small>
                    {{ note }}
                  </small>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const { products } = useProducts();

const env = ref<string>("guest");
</script>

<style scoped></style>
