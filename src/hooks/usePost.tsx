import axios from "axios";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";



const getPost = async () => {
  const { data }: any = await axios.get("/newPost");
  return data;
};

export const usePosts = () => {
  const posts = useQuery(
    ["posts"],
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      return getPost();
    },
    { initialData: [] }
  );

  return posts;
};



const newPost = async (data: any) => {
  if (!data) {
    return;
  }
  await axios.post("/newPost", data).then((res) => {
    return res.data;
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const addPost = useMutation((data) => newPost(data), {
    onSettled: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  return addPost;
};



const deletePost = async (id: any) => {
  if (!id) {
    return;
  }
  await axios.delete(`/deletePost/${id}`);
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  const removePost = useMutation(( id: any) => deletePost(id), {
    onSettled: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  return removePost;
};


export const updatePost = async (data: any) => {
  if (!data.id) {
    return;
  }
  await axios.put(`/updatePost/${data.id}`, data);
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  const update = useMutation(( data: any) => updatePost(data), {
    onSettled: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  return update;
};