<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="searchQuery"
              label="Search News"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-container>
      <v-row class="ma-2">
        <v-col
          cols="12"
          md="3"
          v-for="(news, index) in filteredNews"
          :key="index"
          class="pa-3 d-flex flex-column"
        >
          <v-card class="mx-auto flex d-flex flex-column" max-width="400">
            <v-img
              class="white--text align-end"
              max-height="200px"
              :src="news.image"
            >
            </v-img>
            <v-card-title>{{ news.title }}</v-card-title>

            <v-card-subtitle class="pb-0">
              {{ news.date }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div class="text-subtitle-2">by {{ news.author }}</div>

              <div>{{ news.body }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn :href="news.url" target="_blank" color="orange" text>
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    filteredNews: {
      get() {
        var searchQuery = this.searchQuery;
        return this.allNews.filter(function(el) {
          return (
            el.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
          );
        });
      },
    },
    allNews() {
      return this.$store.getters.getAllNews;
    },
  },
  mounted() {
    this.$store.dispatch("setAllNews");
  },
};
</script>

<style></style>
